import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AlbumManage.module.scss';
import icons from '~/assets/icons';
import LimitedList from '~/components/Components/LimitedList';

import {
  apiGetAlbums,
  apiCreateAlbum,
  apiUpdateAlbum,
  apiDeleteAlbum,
  apiAddSongToAlbum,
  apiRemoveSongFromAlbum,
} from '~/api/services/serviceAlbums';

import { apiGetArtists } from '~/api/services/serviceArtists';
import { apiGetSongsByArtist } from '~/api/services/serviceSongs';

const cx = classNames.bind(styles);

function AlbumManage() {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);

  const [search, setSearch] = useState('');
  const [sortType, setSortType] = useState('');
  const [filterArtist, setFilterArtist] = useState('');

  const [loading, setLoading] = useState(false);

  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const [modalCreate, setModalCreate] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalAddSong, setModalAddSong] = useState(false);

  const [title, setTitle] = useState('');
  const [coverFile, setCoverFile] = useState(null);
  const [artistId, setArtistId] = useState('');
  const [songId, setSongId] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = d => new Date(d).toLocaleDateString('vi-VN');

  const fetchData = async () => {
    try {
      setLoading(true);

      const [albumRes, artistRes] = await Promise.all([apiGetAlbums(), apiGetArtists()]);

      setAlbums(albumRes);
      setArtists(artistRes);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // FILTER + SORT
  const filteredAlbums = useMemo(() => {
    return albums
      .filter(a => a.title.toLowerCase().includes(search.toLowerCase()))
      .filter(a => (filterArtist ? a.artistId === filterArtist : true))
      .sort((a, b) => {
        if (sortType === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
        if (sortType === 'favorites') return (b.favorites || 0) - (a.favorites || 0);
        return 0;
      });
  }, [albums, search, sortType, filterArtist]);

  const getArtistName = artistId => {
    const artist = artists.find(a => a.id === artistId);
    return artist ? artist.name : 'Unknown';
  };

  // ===== CREATE =====
  const handleCreate = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('cover', coverFile);
    formData.append('artistId', artistId);

    await apiCreateAlbum(formData);
    setModalCreate(false);
    fetchData();
  };

  // ===== UPDATE =====
  const openUpdate = album => {
    setSelectedAlbum(album);
    setTitle(album.title);
    setModalUpdate(true);
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append('albumId', selectedAlbum.id);
    formData.append('title', title);
    if (coverFile) formData.append('cover', coverFile);

    await apiUpdateAlbum(formData);
    setModalUpdate(false);
    fetchData();
  };

  // ===== DELETE =====
  const openDelete = album => {
    setSelectedAlbum(album);
    setModalDelete(true);
  };

  const handleDelete = async () => {
    await apiDeleteAlbum(selectedAlbum.id);
    setModalDelete(false);
    fetchData();
  };

  // ===== ADD SONG =====
  const openAddSong = async album => {
    setSelectedAlbum(album);
    setModalAddSong(true);

    const res = await apiGetSongsByArtist(album.artistId);
    setSongs(res);
  };

  const handleAddSong = async () => {
    await apiAddSongToAlbum(selectedAlbum.id, songId);
    const updatedAlbums = await apiGetAlbums();
    setAlbums(updatedAlbums);
    const updated = updatedAlbums.find(a => a.id === selectedAlbum.id);
    setSelectedAlbum(updated);
    setSongId('');
  };

  const handleRemoveSong = async songId => {
    await apiRemoveSongFromAlbum(songId);
    fetchData();
  };

  // RENDER
  const renderAlbum = album => (
    <div key={album.id} className={cx('album-row')}>
      <div className={cx('album-info')}>
        <img src={album.cover} alt="" className={cx('album-img')} />
        <div>
          <div className={cx('album-title')}>{album.title}</div>
          <small className={cx('album-artist')}>{getArtistName(album.artistId)}</small>
          <small>{album.songs?.length || 0} bài hát</small>
        </div>
      </div>

      <div className={cx('album-date')}>{formatDate(album.createdAt)}</div>

      <div className={cx('album-actions')}>
        <button className="btn btn-sm btn-success" onClick={() => openAddSong(album)}>
          +
        </button>

        <button className="btn btn-sm btn-warning" onClick={() => openUpdate(album)}>
          <i className="fas fa-edit"></i>
        </button>

        <button className="btn btn-sm btn-danger" onClick={() => openDelete(album)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );

  return (
    <div className="container-fluid p-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between mb-4">
        <h3>
          <i className={icons.iconStar}></i> Quản lý Album
        </h3>

        <button className="btn btn-primary" onClick={() => setModalCreate(true)}>
          Thêm Album
        </button>
      </div>

      {/* FILTER */}
      <div className="row mb-3">
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Tìm album..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select className="form-select" onChange={e => setFilterArtist(e.target.value)}>
            <option value="">Tất cả nghệ sĩ</option>
            {artists.map(a => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <select className="form-select" onChange={e => setSortType(e.target.value)}>
            <option value="">Sắp xếp</option>
            <option value="newest">Mới nhất</option>
            <option value="favorites">Yêu thích</option>
          </select>
        </div>
      </div>

      {/* LIST */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <LimitedList
          items={filteredAlbums}
          renderItem={renderAlbum}
          limit={8}
          showAllText="Xem tất cả"
          showLessText="Ẩn bớt"
          wrapInRow={false}
        />
      )}

      {/* CREATE MODAL */}
      {modalCreate && (
        <div className={cx('modal-backdrop')}>
          <div className={cx('modal-container')}>
            {/* HEADER */}
            <div className={cx('modal-header')}>
              <h5>Thêm Album</h5>
              <button className="btn-close" onClick={() => setModalCreate(false)} />
            </div>

            {/* BODY */}
            <div className={cx('modal-body')}>
              <label className="form-label">Tên album</label>
              <input className="form-control mb-3" value={title} onChange={e => setTitle(e.target.value)} />

              <label className="form-label">Nghệ sĩ</label>
              <select className="form-select mb-3" value={artistId} onChange={e => setArtistId(e.target.value)}>
                <option value="">Chọn nghệ sĩ</option>
                {artists.map(a => (
                  <option key={a.id} value={a.id}>
                    {a.name}
                  </option>
                ))}
              </select>

              <label className="form-label">Ảnh bìa</label>
              <input type="file" className="form-control" onChange={e => setCoverFile(e.target.files[0])} />
            </div>

            {/* FOOTER */}
            <div className={cx('modal-footer')}>
              <button className="btn btn-secondary" onClick={() => setModalCreate(false)}>
                Hủy
              </button>

              <button className="btn btn-primary" disabled={!title || !artistId} onClick={handleCreate}>
                Tạo
              </button>
            </div>
          </div>
        </div>
      )}

      {modalUpdate && (
        <div className={cx('modal-backdrop')}>
          <div className={cx('modal-container')}>
            <div className={cx('modal-header')}>
              <h5>Cập nhật Album</h5>
              <button className="btn-close" onClick={() => setModalUpdate(false)} />
            </div>

            <div className={cx('modal-body')}>
              <label className="form-label">Tên album</label>
              <input className="form-control mb-3" value={title} onChange={e => setTitle(e.target.value)} />

              <label className="form-label">Ảnh bìa</label>
              <input type="file" className="form-control" onChange={e => setCoverFile(e.target.files[0])} />
            </div>

            <div className={cx('modal-footer')}>
              <button className="btn btn-secondary" onClick={() => setModalUpdate(false)}>
                Hủy
              </button>

              <button className="btn btn-warning" onClick={handleUpdate}>
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      )}

      {modalDelete && (
        <div className={cx('modal-backdrop')}>
          <div className={cx('modal-container')}>
            <div className={cx('modal-header')}>
              <h5>Xóa Album</h5>
              <button className="btn-close" onClick={() => setModalDelete(false)} />
            </div>

            <div className={cx('modal-body')}>
              Bạn có chắc muốn xóa album:
              <br />
              <b>{selectedAlbum?.title}</b> ?
            </div>

            <div className={cx('modal-footer')}>
              <button className="btn btn-secondary" onClick={() => setModalDelete(false)}>
                Hủy
              </button>

              <button className="btn btn-danger" onClick={handleDelete}>
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD SONG MODAL */}
      {modalAddSong && (
        <div className={cx('modal-backdrop')}>
          <div className={cx('modal-container')}>
            <div className={cx('modal-header')}>
              <h5>Quản lý bài hát</h5>
              <button className="btn-close" onClick={() => setModalAddSong(false)} />
            </div>

            <div className={cx('modal-body')}>
              {/* ADD SONG */}
              <label className="form-label">Thêm bài hát</label>
              <select className="form-select mb-3" value={songId} onChange={e => setSongId(e.target.value)}>
                <option value="">Chọn bài hát</option>
                {songs.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>

              <button
                className="btn btn-success mb-3"
                disabled={!songId}
                onClick={async () => {
                  await handleAddSong();
                  fetchData(); // refresh
                }}
              >
                Thêm
              </button>

              <hr />

              {/* REMOVE SONG */}
              <h6>Danh sách bài trong album</h6>

              {selectedAlbum?.songs?.length === 0 && <div>Chưa có bài hát</div>}

              {selectedAlbum?.songs?.map(s => (
                <div key={s.id} className="d-flex justify-content-between align-items-center mb-2">
                  <span>{s.title}</span>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={async () => {
                      await handleRemoveSong(s.id);
                    }}
                  >
                    Xóa
                  </button>
                </div>
              ))}
            </div>

            <div className={cx('modal-footer')}>
              <button className="btn btn-secondary" onClick={() => setModalAddSong(false)}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AlbumManage;

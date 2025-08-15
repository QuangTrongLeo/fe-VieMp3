import React, { useState } from 'react';
import { SongRow } from '~/components/Components/Row';
import LimitedList from '~/components/Components/LimitedList';
import icons from '~/assets/icons';
import classNames from 'classnames/bind';
import styles from './MySongs.module.scss';
import { CreateCard } from '~/components/Components/Card';
import { apiFavoriteSongs } from '~/api/apiURL/apiSongs';
import apiGenres from '~/api/apiURL/apiGenres';

const cx = classNames.bind(styles);

const sortedFavoriteSongs = [...apiFavoriteSongs].sort((a, b) => new Date(b.favotitedAt) - new Date(a.favotitedAt));

const renderItem = (song, index) => (
  <SongRow
    key={song.songId}
    cover={song.cover}
    song={song.songName}
    artist={song.artistName}
    album={song.albumName}
    audio={song.audio}
  />
);

function MySongs() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    image: null,
    audio: null,
    title: '',
    description: '',
    genres: [],
  });
  const [errors, setErrors] = useState({});
  const [genreDropdownOpen, setGenreDropdownOpen] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, [type]: file }));
  };

  const handleGenreToggle = id => {
    setFormData(prev => {
      const genres = prev.genres.includes(id) ? prev.genres.filter(g => g !== id) : [...prev.genres, id];
      return { ...prev, genres };
    });
  };

  const validateForm = () => {
    let temp = {};
    if (!formData.image) temp.image = 'Vui lòng chọn ảnh';
    if (!formData.audio) temp.audio = 'Vui lòng chọn file MP3';
    if (!formData.title.trim()) temp.title = 'Nhập tên bài hát';
    if (!formData.description.trim()) temp.description = 'Nhập mô tả';
    if (formData.genres.length === 0) temp.genres = 'Chọn ít nhất 1 thể loại';
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;
    console.log('Bài hát mới:', formData);
    setIsPopupOpen(false);
    setFormData({ image: null, audio: null, title: '', description: '', genres: [] });
    setErrors({});
  };

  return (
    <>
      <h1 className="text-center">
        <i className={icons.iconMusic}></i>
        <span style={{ paddingLeft: '10px' }}>Những bài hát của bạn</span>
      </h1>

      <div className="mb-3">
        <h4>Thêm bài hát </h4>
        <CreateCard content="Thêm bài hát mới" onClick={() => setIsPopupOpen(true)} />
      </div>

      {/* Popup thêm bài hát */}
      {isPopupOpen && (
        <div className={cx('popup-overlay')}>
          <div className={cx('popup-content')}>
            {/* Left */}
            <div className={cx('popup-left')}>
              <div className={cx('upload-box')}>
                <div className={cx('upload-dash', 'image')}>
                  <input type="file" accept="image/*" onChange={e => handleFileChange(e, 'image')} />
                  {formData.image ? (
                    <img src={URL.createObjectURL(formData.image)} alt="Preview" className={cx('preview-img')} />
                  ) : (
                    <p>Chọn ảnh từ máy</p>
                  )}
                </div>

                <div className={cx('upload-dash', 'audio')}>
                  <input type="file" accept="audio/mp3" onChange={e => handleFileChange(e, 'audio')} />
                  {formData.audio ? <p>{formData.audio.name}</p> : <p>Chọn file MP3 từ máy</p>}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className={cx('popup-right')}>
              <div className={cx('form-group')}>
                <label>Tên bài hát</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Nhập tên bài hát"
                  value={formData.title}
                  onChange={handleInputChange}
                />
                {errors.title && <p className={cx('error')}>{errors.title}</p>}
              </div>

              <div className={cx('form-group')}>
                <label>Mô tả</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} />
                {errors.description && <p className={cx('error')}>{errors.description}</p>}
              </div>

              <div className={cx('form-group')}>
                <label>Thể loại</label>
                <div className={cx('select-box')} onClick={() => setGenreDropdownOpen(prev => !prev)}>
                  {formData.genres.length > 0
                    ? apiGenres
                        .filter(g => formData.genres.includes(g.id))
                        .map(g => g.genreName)
                        .join(', ')
                    : 'Chọn thể loại'}
                  <span className={cx('caret')}>
                    <i className={cx(icons.iconChevronDown)}></i>
                  </span>
                </div>
                {genreDropdownOpen && (
                  <div className={cx('dropdown')}>
                    {apiGenres.map(g => (
                      <label key={g.id}>
                        <input
                          type="checkbox"
                          checked={formData.genres.includes(g.id)}
                          onChange={() => handleGenreToggle(g.id)}
                        />
                        {g.genreName}
                      </label>
                    ))}
                  </div>
                )}
                {errors.genres && <p className={cx('error')}>{errors.genres}</p>}
              </div>

              <div className={cx('popup-actions')}>
                <button className={cx('btn-close')} onClick={() => setIsPopupOpen(false)}>
                  Đóng
                </button>
                <button className={cx('btn-save')} onClick={handleSave}>
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header của danh sách */}
      <div className={cx('song-row', 'd-flex', 'align-items-center', 'px-3', 'py-3')}>
        <div className="col-6 d-flex align-items-center gap-2">
          <i className={cx('song-row-icon-header', icons.iconMusic)}></i>
          <span>Bài hát</span>
        </div>
        <div className="col-4 d-flex align-items-center">
          <i className={cx('song-row-icon-header', icons.iconCompactDisc, 'me-2')}></i>
          <span>Album</span>
        </div>
        <div className="col-2 d-flex justify-content-end align-items-center">
          <i className={cx('song-row-icon-header', icons.iconClock, 'me-2')}></i>
          <span>Thời gian</span>
        </div>
      </div>

      {/* Danh sách bài hát giới hạn */}
      <LimitedList
        items={sortedFavoriteSongs}
        renderItem={renderItem}
        limit={6}
        showAllText="Hiện tất cả bài hát"
        showLessText="Ẩn bớt"
      />
    </>
  );
}

export default MySongs;

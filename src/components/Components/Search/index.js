import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import icons from '~/assets/icons';
import { SearchRow } from '../Row';
import { useNavigate } from 'react-router-dom';
import LimitedList from '../LimitedList';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { apiSongs } from '~/api/apiURL/apiSongs';
import { apiArtists } from '~/api/apiURL/apiArtists';
import { apiAlbums } from '~/api/apiURL/apiAlbums';

const cx = classNames.bind(styles);

function Search() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // Ký tự trong form search
  const handleInputSearch = e => {
    const value = e.target.value;
    setSearchKeyword(value);

    if (value.trim() === '') {
      setSearchResults([]);
    } else {
      const keyword = value.toLowerCase();

      const matchedArtists = apiArtists
        .filter(artist => artist.artistName.toLowerCase().includes(keyword))
        .map(artist => ({ ...artist, type: 'artist' }));

      const matchedSongs = apiSongs
        .filter(
          song => song.songName.toLowerCase().includes(keyword) || song.artistName.toLowerCase().includes(keyword)
        )
        .map(song => ({ ...song, type: 'song' }));

      const matchedAlbums = apiAlbums
        .filter(album => album.albumName.toLowerCase().includes(keyword))
        .map(album => ({ ...album, type: 'album' }));

      const resultSearchs = [...matchedArtists, ...matchedSongs, ...matchedAlbums].sort((a, b) => {
        if (a.type === b.type) return 0;
        return a.type === 'artist' ? -1 : 1;
      });

      setSearchResults(resultSearchs);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const keyword = searchKeyword.trim().toLowerCase();

    if (!keyword) return;

    const matchedArtists = apiArtists.filter(artist => artist.artistName.toLowerCase().includes(keyword));

    if (matchedArtists.length > 0) {
      const artistName = matchedArtists[0].artistName;
      navigate(`/artist/${encodeURIComponent(artistName)}`);
      setSearchKeyword('');
      return;
    }

    const matchedSongs = apiSongs.filter(
      song => song.songName.toLowerCase().includes(keyword) || song.artistName.toLowerCase().includes(keyword)
    );

    if (matchedSongs.length > 0) {
      const songName = matchedSongs[0].songName;
      navigate(`/song/${encodeURIComponent(songName)}`);
      setSearchKeyword('');
      return;
    }

    const matchedAlbums = apiAlbums.filter(album => album.albumName.toLowerCase().includes(keyword));

    if (matchedAlbums.length > 0) {
      const albumName = matchedAlbums[0].albumName;
      navigate(`/album/${encodeURIComponent(albumName)}`);
      setSearchKeyword('');
      return;
    }

    // Nếu không khớp gì cũng reset
    setSearchKeyword('');
  };

  // Render ra các dòng của Tippy Search
  const renderSearchRow = (item, index) => (
    <SearchRow
      key={`${item.type}-${item.songId || item.artistId || item.albumId}`}
      type={item.type}
      cover={item.cover || item.avatar}
      content={item.type === 'song' ? item.songName : item.type === 'artist' ? item.artistName : item.albumName}
      desc={
        item.type === 'song'
          ? `${item.artistName}${item.albumName ? ` • Album: ${item.albumName}` : ''}`
          : item.type === 'artist'
          ? 'Nghệ sĩ nổi bật'
          : `Album của "${item.artistName}"`
      }
      onClick={() => setSearchKeyword('')}
    />
  );

  return (
    <Tippy
      visible={searchKeyword.length > 0 && searchResults.length > 0}
      interactive
      placement="bottom-start"
      onClickOutside={() => setSearchKeyword('')}
      render={attrs => (
        <div className={cx('tippy-popup-box')} tabIndex="-1" {...attrs}>
          <h6>Gợi ý kết quả</h6>
          <LimitedList
            items={searchResults}
            renderItem={renderSearchRow}
            showAllText="Hiện tất cả kết quả"
            showLessText="Ẩn bớt"
            wrapInRow={false}
          />
        </div>
      )}
    >
      <form onSubmit={handleSubmit} className={cx('input-group', 'search-form', 'w-50')}>
        <input
          type="search"
          className="form-control"
          placeholder="Bạn muốn phát nội dung gì?"
          aria-label="Search"
          value={searchKeyword}
          onChange={handleInputSearch}
        />
        <button onClick={handleSubmit} className={cx('btn', 'btn-outline-custom')} type="button">
          <i className={icons.iconSearch}></i>
        </button>
      </form>
    </Tippy>
  );
}

export default Search;

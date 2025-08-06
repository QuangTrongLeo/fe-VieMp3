import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import icons from '~/assets/icons';
import { SearchRow } from '../Row';
import LimitedList from '../LimitedList';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { apiSongs } from '~/api/apiURL/apiSongs';
import { apiArtists } from '~/api/apiURL/apiArtists';

const cx = classNames.bind(styles);

function Search() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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

      const resultSearchs = [...matchedArtists, ...matchedSongs].sort((a, b) => {
        if (a.type === b.type) return 0;
        return a.type === 'artist' ? -1 : 1;
      });

      setSearchResults(resultSearchs);
    }
  };

  // Render ra các dòng của Tippy Search
  const renderSearchRow = (item, index) => (
    <SearchRow
      key={`${item.type}-${item.songId || item.artistId}`}
      type={item.type}
      cover={item.cover || item.avatar}
      content={item.songName || item.artistName}
      desc={
        item.type === 'song'
          ? `${item.artistName}${item.albumName ? ` • Album: ${item.albumName}` : ''}`
          : 'Nghệ sĩ nổi bật'
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
      <form className={cx('input-group', 'search-form', 'w-50')}>
        <input
          type="search"
          className="form-control"
          placeholder="Bạn muốn phát nội dung gì?"
          aria-label="Search"
          value={searchKeyword}
          onChange={handleInputSearch}
        />
        <button className={cx('btn', 'btn-outline-custom')} type="button">
          <i className={icons.iconSearch}></i>
        </button>
      </form>
    </Tippy>
  );
}

export default Search;

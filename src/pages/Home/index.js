import React from 'react';
import { CircleCard, RectangleCard, SquareCard } from '~/components/Components/Card';
import HorizontalScroll from '~/components/Components/HorizontalScroll';
import './Home.scss';

function Home() {
  // FAVORITE ARTISTS
  const apiFavoriteArtists = [
    {
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Vũ.',
    },
    {
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Obito',
    },
    {
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Đen Vâu',
    },
    {
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Binz',
    },
    {
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'SOOBIN',
    },
    {
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Vũ.',
    },
    {
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Obito',
    },
    {
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Đen Vâu',
    },
    {
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Binz',
    },
    // Thêm các artist khác...
  ];

  // FAVORITE SONGS OF THE WEEK
  const apiFavoriteSongsOfTheWeek = [
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
  ];

  // NEW SONGS
  const apiNewSongs = [
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      title: 'Chúng ta không thuộc về nhau',
      artistName: 'Sơn Tùng - MTP',
    },
  ];

  return (
    <div className="home-wrapper">
      <h1 className="text-center">VieMp3 - Nhạc dành cho người Việt</h1>

      {/* NEW SONGS */}
      <section className="section-block">
        <h3>Bài hát mới ra</h3>

        <HorizontalScroll>
          {apiNewSongs.map(song => (
            <RectangleCard
              key={song.title}
              content={song.title}
              desc={song.artistName}
              cover={song.cover}
              href={`/song/${song.title}`}
            />
          ))}
        </HorizontalScroll>
      </section>

      {/* FAVORITE SONGS OF THE WEEK */}
      <section className="section-block">
        <h3>Top bài hát yêu thích của tuần</h3>

        <HorizontalScroll>
          {apiFavoriteSongsOfTheWeek.map(song => (
            <SquareCard
              key={song.title}
              content={song.title}
              desc={song.artistName}
              cover={song.cover}
              href={`/song/${song.title}`}
            />
          ))}
        </HorizontalScroll>
      </section>

      {/* FAVORITE ARTISTS */}
      <section className="section-block">
        <h3>Nghệ sĩ phổ biến</h3>

        <HorizontalScroll>
          {apiFavoriteArtists.map(artist => (
            <CircleCard
              key={artist.artistId}
              content={artist.artistName}
              cover={artist.avatar}
              href={`/artist/${artist.artistName}`}
            />
          ))}
        </HorizontalScroll>
      </section>
    </div>
  );
}

export default Home;

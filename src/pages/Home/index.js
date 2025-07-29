import React from 'react';
import { CircleCard, RectangleCard, SquareCard } from '~/components/Components/Card';
import HorizontalScroll from '~/components/Components/HorizontalScroll';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Home() {
  // NEW SONGS
  const apiNewSongs = [
    {
      songId: '1',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '2',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '3',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '4',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '5',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '6',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '7',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '8',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '9',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '10',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
  ];

  // FAVORITE SONGS OF THE WEEK
  const apiFavoriteSongsOfTheWeek = [
    {
      songId: '1',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '2',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '3',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '4',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '5',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '6',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '7',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '8',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '9',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '10',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
  ];

  // FAVORITE ARTISTS
  const apiFavoriteArtists = [
    {
      artistId: '1',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      artistId: '2',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Vũ.',
    },
    {
      artistId: '3',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Obito',
    },
    {
      artistId: '4',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Đen Vâu',
    },
    {
      artistId: '5',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Binz',
    },
    {
      artistId: '6',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'SOOBIN',
    },
    {
      artistId: '7',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Vũ.',
    },
    {
      artistId: '8',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Obito',
    },
    {
      artistId: '9',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Đen Vâu',
    },
    {
      artistId: '10',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Binz',
    },
  ];

  // HOT ALBUMS
  const apiHotAlbums = [
    {
      albumId: '1',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      albumName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      albumId: '2',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      albumName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      albumId: '3',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      albumName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      albumId: '4',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      albumName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      albumId: '5',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      albumName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      albumId: '6',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      albumName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      albumId: '7',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      albumName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      albumId: '8',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      albumName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      albumId: '9',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      albumName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      albumId: '10',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      albumName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
  ];

  // SUITABLE SONGS
  const apiSuitableSongs = [
    {
      songId: '1',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '2',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '3',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '4',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '5',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '6',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '7',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '8',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '9',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      songId: '10',
      cover:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      songName: 'Chúng ta không thuộc về nhau bờ mi vậy khi xưa đợi mong',
      artistName: 'Sơn Tùng - MTP',
    },
  ];

  // YOUR FAVORITE ARTISTS
  const apiYourFavoriteArtists = [
    {
      artistId: '1',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Sơn Tùng - MTP',
    },
    {
      artistId: '2',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Vũ.',
    },
    {
      artistId: '3',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Obito',
    },
    {
      artistId: '4',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Đen Vâu',
    },
    {
      artistId: '5',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Binz',
    },
    {
      artistId: '6',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'SOOBIN',
    },
    {
      artistId: '7',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Vũ.',
    },
    {
      artistId: '8',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Obito',
    },
    {
      artistId: '9',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Đen Vâu',
    },
    {
      artistId: '10',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'Binz',
    },
  ];

  return (
    <div className={cx('home-wrapper')}>
      <h1 className="text-center">VieMp3 - Nhạc dành cho người Việt</h1>

      {/* NEW SONGS */}
      <section className={cx('section-block')}>
        <h3>Bài hát mới ra</h3>
        <HorizontalScroll>
          {apiNewSongs
            .sort((a, b) => b.songId - a.songId)
            .slice(0, 10)
            .map(song => (
              <RectangleCard
                key={song.songId}
                content={song.songName}
                desc={song.artistName}
                cover={song.cover}
                href={`/song/${song.songName}`}
              />
            ))}
        </HorizontalScroll>
      </section>

      {/* FAVORITE SONGS OF THE WEEK */}
      <section className={cx('section-block')}>
        <h3>Top bài hát yêu thích của tuần</h3>
        <HorizontalScroll>
          {apiFavoriteSongsOfTheWeek.map(song => (
            <SquareCard
              key={song.songId}
              content={song.songName}
              desc={song.artistName}
              cover={song.cover}
              href={`/song/${song.songName}`}
            />
          ))}
        </HorizontalScroll>
      </section>

      {/* FAVORITE ARTISTS */}
      <section className={cx('section-block')}>
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

      {/* HOT ALBUMS */}
      <section className={cx('section-block')}>
        <h3>Album hot</h3>
        <HorizontalScroll>
          {apiHotAlbums.map(album => (
            <SquareCard
              key={album.albumId}
              content={album.albumName}
              desc={album.artistName}
              cover={album.cover}
              href={`/song/${album.albumName}`}
            />
          ))}
        </HorizontalScroll>
      </section>

      {/* SUITABLE SONGS */}
      <section className={cx('section-block')}>
        <h3>Phù hợp với bạn</h3>
        <HorizontalScroll>
          {apiSuitableSongs.map(song => (
            <SquareCard
              key={song.songId}
              content={song.songName}
              desc={song.artistName}
              cover={song.cover}
              href={`/song/${song.songName}`}
            />
          ))}
        </HorizontalScroll>
      </section>

      {/* YOUR FAVORITE ARTISTS */}
      <section className={cx('section-block')}>
        <h3>Nghệ sĩ yêu thích của bạn</h3>
        <HorizontalScroll>
          {apiYourFavoriteArtists.map(artist => (
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

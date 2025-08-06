// import baseURL from '~/utils/httpBaseURL';

// const apiFavoriteArtists = `${baseURL}favorite-artists`;

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

// ALBUMS OF ARTIST
const apiAlbumsOfArtist = [
  {
    albumId: '1',
    albumName: 'Sơn Tùng - MTP',
    cover:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSStpZEMzpTrUEK0QZHAG48NV3sMuoCO0ReV2JEIY7ot7KnICpz7shfmmJFKmNF3Og1tN9JWWJqD6m3vKg4LB_U_Sqy0TTpQdKmMO67ehT1JQ',
  },
  {
    albumId: '2',
    albumName: 'Mono',
  },
  {
    albumId: '3',
    albumName: 'Hiếu Thứ 2',
  },
  {
    albumId: '4',
    albumName: 'Bình Gold',
  },
  {
    albumId: '5',
    albumName: 'QNT',
    cover: 'https://i.scdn.co/image/ab6761610000e5ebc29f15a5b9b46fed41a0f2af',
  },
];

// FAVORITE ALBUMS
const apiFavoriteAlbums = [
  {
    albumId: '1',
    albumName: 'Sơn Tùng - MTP',
    cover:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSStpZEMzpTrUEK0QZHAG48NV3sMuoCO0ReV2JEIY7ot7KnICpz7shfmmJFKmNF3Og1tN9JWWJqD6m3vKg4LB_U_Sqy0TTpQdKmMO67ehT1JQ',
  },
  {
    albumId: '2',
    albumName: 'Mono',
  },
  {
    albumId: '3',
    albumName: 'Hiếu Thứ 2',
  },
  {
    albumId: '4',
    albumName: 'Bình Gold',
  },
  {
    albumId: '5',
    albumName: 'QNT',
    cover: 'https://i.scdn.co/image/ab6761610000e5ebc29f15a5b9b46fed41a0f2af',
  },
];

export { apiHotAlbums, apiAlbumsOfArtist, apiFavoriteAlbums };

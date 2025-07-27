import React from 'react';
import HorizontalScroll from '~/components/Components/HorizontalScroll';
import './Home.scss';

function Home() {
  const data = [
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
      artistId: '1',
      avatar:
        'https://www.bing.com/ck/a?!&&p=b5edf5b627dc57d187b29c9608b60c36526e079c862dc91ca0ea57e0b6843869JmltdHM9MTc1MzQ4ODAwMA&ptn=3&ver=2&hsh=4&fclid=36ff236f-6320-6782-3100-371b62326657&u=a1L2ltYWdlcy9zZWFyY2g_cT1oJWMzJWFjbmgrc29iaW4maWQ9Qzg5MTk4RUNBMDRFNDJBQTU2NkQxQUY2Q0M2RDFGQzNEODBEMTUzOCZGT1JNPUlBQ0ZJUg&ntb=1',
      artistName: 'SOOBIN',
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
    // Thêm các artist khác...
  ];

  return (
    <div className="home-wrapper">
      {/* <h1>Top 10 bài hát trending trong tuần</h1>
      <HorizontalScroll>
        {data.map(item => (
          <a href={`/artist/${item.artistName}`} key={item.artistId} className="artist-card">
            <div className="avatar-container">
              <img src={item.avatar} alt={item.artistName} />
            </div>
            <div className="artist-name">{item.artistName}</div>
          </a>
        ))}
      </HorizontalScroll> */}
      <br />
      <h1>Nghệ sĩ yêu thích</h1>
      <HorizontalScroll>
        {data.map(item => (
          <a href={`/artist/${item.artistName}`} key={item.artistId} className="artist-card">
            <div className="avatar-container">
              <img src={item.avatar} alt={item.artistName} />
            </div>
            <div className="artist-name">{item.artistName}</div>
          </a>
        ))}
      </HorizontalScroll>
    </div>
  );
}

export default Home;

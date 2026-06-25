import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import './index.css'

import React, { useEffect, useState } from 'react'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [search, setSearch] = useState('');
  console.log(sidebar);
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebar(false);
      } else {
        setSidebar(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      <Navbar setSidebar={setSidebar} setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} search={search} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  )
}

export default App
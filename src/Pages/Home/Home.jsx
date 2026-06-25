import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';
import Navbar from '../../Components/Navbar/Navbar';

const Home = ({ sidebar, search }) => {
  const [category, setCategory] = useState(0);
  return (
    <div>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div
        className={`pt-5 min-h-screen scrollbar-hide transition-all duration-300 ${sidebar ? 'ml-[15%]' : 'ml-[5%]'
          } bg-gray-100 overflow-y-auto`}
        style={{ height: 'calc(100vh - 4rem)' }}
      >
        <Feed category={category} search={search}/>
      </div>
    </div>
  );
};

export default Home;

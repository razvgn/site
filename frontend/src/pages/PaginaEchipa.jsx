// HomePage.js
import React, { useState } from 'react';
import SidebarComp from '../components/SidebarComp';
import EchipeListPage from '../components/ComponentaEchipe';
import Button from '../components/Button';
import ButtonAccent from '../components/ButtonAccent';
import EchipaAddPage from './EchipaAddPage';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('list');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };



  const redirectioneaza = () => {
    console.log("aici")
    navigate("/add_echipa")
  }
  return (
    <div className="h-full bg-filler min-h-screen">
 
        <SidebarComp />
      

      <div className='flex-grow p-4  overflow-hidden'>
        <div className="grid h-full grid-cols-1 sm:grid-cols-2 gap-2">
          <div className=' h-14  col-span-4  flex flex-col items-start justify-end '>
            <div className="flex items-center">            
               <Button onClick={() => redirectioneaza()} text='Creeaza echipa' />
             
            </div>
          </div>
          <div className={`  col-span-4 row-span-8 overflow-y-auto  ${'flex flex-col '}`}>
            <EchipeListPage searchTerm={searchTerm} viewMode={viewMode} />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React from 'react'
import SidebarComp from '../components/SidebarComp'


const HomePage = () => {
  return (
    <div className="h-full min-h-screen bg-filler">
        <SidebarComp /> {/* Meniul orizontal în partea de sus */}
        <div className='p-4 overflow-hidden '> {/* Conținutul principal sub meniu */}
            <div className="grid h-full  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 grid-rows-10 gap-1 grid-auto-rows-auto-cols-min">
                {/* Conținutul paginii aici */}
            </div>
        </div>
    </div>
  )
}
export default HomePage

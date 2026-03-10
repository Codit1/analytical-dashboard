import React from 'react'
import { Outlet } from 'react-router'

import NavBar from '../components/NavBar/NavBar'
import SideMenu from '../components/SideNav/SideMenu'
import Footer from '../components/footer/Footer'


function MainLayouts() {
    return (
        <div className='bg-[#1B1B1D] min-h-screen'>
            <NavBar />

            <div className='xlc:flex'>
                <SideMenu />
                <div className='xlc:w-full'>
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default MainLayouts

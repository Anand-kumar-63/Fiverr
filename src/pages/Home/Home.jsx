import React from 'react'
import { Outlet } from 'react-router'
import Featured from '../../Components/Featured/Featured'
import Trustedby from '../../Components/Trustedby/Trustedby'
const Home = () => {
  return (
    <div className='w-[99vw] h-auto p-1 bg-white'>
    <Featured />
    <Trustedby />
    </div>
  )
}

export default Home
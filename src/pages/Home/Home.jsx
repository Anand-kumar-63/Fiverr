import React from 'react'
import { Outlet } from 'react-router'
const Home = () => {
  return (
    <div>hey there i am home
    <Outlet />
    </div>
  )
}

export default Home
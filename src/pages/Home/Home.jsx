import React from 'react'
import { Outlet } from 'react-router'
import Featured from '../../Components/Featured/Featured'
import Trustedby from '../../Components/Trustedby/Trustedby'
import Slide from '../../Components/slide/slide.jsx'
import {cards} from "../../data.js"
import Features from '../../Components/Features/Features'
const Home = () => {
  return (
    <div className='w-[99vw] h-auto p-1 bg-white'>
    <Featured />
    <Trustedby />
    <Slide Cards={cards}/>
    <Features />
    </div>
  )
}

export default Home
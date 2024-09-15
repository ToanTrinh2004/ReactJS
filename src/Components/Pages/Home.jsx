import React from 'react'
import Carousel from '../Carousel/Carousel'
import Popular from '../Popular/Popular'
import RunningProduct from '../RunningProduct/RunningProduct'
import Daily from '../Daily/Daily'
function Home() {
  return (
    <div>
        <Carousel/>
        <Popular/>
        <RunningProduct/>
        <Daily/>
    </div>
  )
}

export default Home
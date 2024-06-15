import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 flex h-[700px]'>
        <div className='flex-1 flex flex-col justify-center gap-5 pl-10 line-height[1.1] mt-[-100px]'>
            <h2 className='text-black text-5xl font-semibold'>New Arrivals Only</h2>
            <div>
                <div className='flex items-center gap-5'>
                    <p className='text-new text-6xl font-bold'>new</p>
                    <img src={hand_icon} alt="" className='w-48'/>
                </div>
                <p className='text-6xl font-bold'>Collections</p>
                <p className='text-6xl font-bold'>For everyone</p>
            </div>
            <div className='flex justify-center items-center gap-4  rounded-full mt-2.5 bg-red-500 text-white text-xl font-medium w-72 h-16'>
                <div>Lastest Collection</div>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
        <div className='w-[500px] justify-center'>
            <img src={hero_image} alt=""/>
        </div>
    </div>
  )
}

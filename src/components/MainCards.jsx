import React from 'react'
import { data } from './utils/cardsData'

const MainCards = () => {
  return (
    <div className='flex flex-row gap-10'>
        {data.map((card, index) => (
            <div key={index} className='w-[8rem] h-[20rem] bg-white'>
                <div className='w-full h-full bg-red-500'>
                    <img className='w-full h-full object-cover sticky top-0' src={card.image} alt="" />
                </div>
            </div>
        ))}
    </div>
  )
}

export default MainCards
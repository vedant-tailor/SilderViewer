import React from 'react'


const Phrase = ({src}) => {
    return (
        <div className={'px-5 flex gap-5 items-center'}>
          <p className='text-[15vw] md:text-[7.5vw]'>Front End Developer</p>
          <span className="relative h-[15vw] md:h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
            <img style={{objectFit:"cover"}} src={src} alt="image" fill/>
          </span>
        </div>
      )
}

export default Phrase
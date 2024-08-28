'use client'
import { useSwiper } from 'swiper/react'
import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'
const ProjectButton = () => {
    const swiper = useSwiper()
  return (
      <div className='flex gap-4 absolute right-0 bottom-[calc(50%_-_22px)] lg:-bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none'>
          <button onClick={() => swiper.slidePrev()} className='bg-slate-900/90 rounded-sm hover:bg-accent hover:text-primary hover:shadow-inner hover:shadow-accent-hover text-[20px] duration-300 hover:scale-110 w-[44px] h-[44px] flex justify-center items-center
          '>
            <PiCaretLeftBold/>
          </button>
          <button onClick={() => { swiper.slideNext() }} className='bg-slate-900/90 rounded-sm hover:bg-accent hover:text-primary hover:shadow-inner hover:shadow-accent-hover text-[20px] duration-300 hover:scale-110 w-[44px] h-[44px] flex justify-center items-center'>
              <PiCaretRightBold />
          </button>
    </div>
  )
}

export default ProjectButton
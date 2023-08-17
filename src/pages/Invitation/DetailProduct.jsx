import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const DetailProduct = () => {
  return (
    <div className='container mx-auto px-1 py-2'>
      <a href={`/`} className='inline space-x-1 bg-gray-100 px-2 py-1 text-gray-800 rounded-lg'>
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <span>Kembali</span>
      </a>
      <div className='flex gap-5'>
        <div className='w-full md:w-5/12'>
          <img src="https://anada-storage.vercel.app/assets/sv/sp-spatula-kemas-mika.jpg" alt="" />
        </div>
        <div className='w-full md:w-7/12'>
          <div>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, atque!</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProduct
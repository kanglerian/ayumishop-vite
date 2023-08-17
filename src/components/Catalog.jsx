import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Catalog = () => {
  return (
    <div>
      <div className='flex flex-wrap'>

        <div className='w-1/2 md:w-1/5 p-1'>
          <div className='border border-gray-200 rounded-lg overflow-hidden'>
            <img src="https://anada-storage.vercel.app/assets/sv/sp-spatula-kemas-mika.jpg" alt="" />
            <div className='p-3 space-y-2'>
              <h4 className='text-sm text-gray-900'>Lorem ipsum dolor sit amet consect adipisicing elit. Tempore, error?</h4>
              <div className='space-x-2'>
                <span className='text-sm text-gray-500 line-through'>Rp1.500</span>
                <span className='text-sm text-red-500'>Rp1.200</span>
              </div>
              <div className='flex justify-between items-center'>
                <a href={`/detail`} className='inline-block rounded text-sm bg-red-500 text-white px-3 py-1'>Lihat</a>
                <a href="#" className='inline-block text-green-500'>
                <FontAwesomeIcon icon={faWhatsapp} size='lg' />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='w-1/2 md:w-1/5 p-1'>
          <div className='border border-gray-200 rounded-lg overflow-hidden'>
            <img src="https://anada-storage.vercel.app/assets/sv/sp-spatula-kemas-mika.jpg" alt="" />
            <div className='p-3 space-y-2'>
              <h4 className='text-sm text-gray-900'>Lorem ipsum dolor sit amet consect adipisicing elit. Tempore, error?</h4>
              <div className='space-x-2'>
                <span className='text-sm text-gray-500 line-through'>Rp1.500</span>
                <span className='text-sm text-red-500'>Rp1.200</span>
              </div>
              <div className='flex justify-between items-center'>
                <a href="#" className='inline-block rounded text-sm bg-red-500 text-white px-3 py-1'>Lihat</a>
                <a href="#" className='inline-block text-green-500'>
                <FontAwesomeIcon icon={faWhatsapp} size='lg' />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='w-1/2 md:w-1/5 p-1'>
          <div className='border border-gray-200 rounded-lg overflow-hidden'>
            <img src="https://anada-storage.vercel.app/assets/sv/sp-spatula-kemas-mika.jpg" alt="" />
            <div className='p-3 space-y-2'>
              <h4 className='text-sm text-gray-900'>Lorem ipsum dolor sit amet consect adipisicing elit. Tempore, error?</h4>
              <div className='space-x-2'>
                <span className='text-sm text-gray-500 line-through'>Rp1.500</span>
                <span className='text-sm text-red-500'>Rp1.200</span>
              </div>
              <div className='flex justify-between items-center'>
                <a href="#" className='inline-block rounded text-sm bg-red-500 text-white px-3 py-1'>Lihat</a>
                <a href="#" className='inline-block text-green-500'>
                <FontAwesomeIcon icon={faWhatsapp} size='lg' />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='w-1/2 md:w-1/5 p-1'>
          <div className='border border-gray-200 rounded-lg overflow-hidden'>
            <img src="https://anada-storage.vercel.app/assets/sv/sp-spatula-kemas-mika.jpg" alt="" />
            <div className='p-3 space-y-2'>
              <h4 className='text-sm text-gray-900'>Lorem ipsum dolor sit amet consect adipisicing elit. Tempore, error?</h4>
              <div className='space-x-2'>
                <span className='text-sm text-gray-500 line-through'>Rp1.500</span>
                <span className='text-sm text-red-500'>Rp1.200</span>
              </div>
              <div className='flex justify-between items-center'>
                <a href="#" className='inline-block rounded text-sm bg-red-500 text-white px-3 py-1'>Lihat</a>
                <a href="#" className='inline-block text-green-500'>
                <FontAwesomeIcon icon={faWhatsapp} size='lg' />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='w-1/2 md:w-1/5 p-1'>
          <div className='border border-gray-200 rounded-lg overflow-hidden'>
            <img src="https://anada-storage.vercel.app/assets/sv/sp-spatula-kemas-mika.jpg" alt="" />
            <div className='p-3 space-y-2'>
              <h4 className='text-sm text-gray-900'>Lorem ipsum dolor sit amet consect adipisicing elit. Tempore, error?</h4>
              <div className='space-x-2'>
                <span className='text-sm text-gray-500 line-through'>Rp1.500</span>
                <span className='text-sm text-red-500'>Rp1.200</span>
              </div>
              <div className='flex justify-between items-center'>
                <a href="#" className='inline-block rounded text-sm bg-red-500 text-white px-3 py-1'>Lihat</a>
                <a href="#" className='inline-block text-green-500'>
                <FontAwesomeIcon icon={faWhatsapp} size='lg' />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Catalog
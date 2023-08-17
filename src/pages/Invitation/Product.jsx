import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowUpWideShort, faArrowDownShortWide, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Catalog from '../../components/Catalog'

const Product = () => {
  return (
    <div className='container mx-auto px-1 py-2'>
      <div className='flex flex-col md:flex-row space-y-3 mt-5 md:gap-3'>
        <div className='w-full md:w-1/6 flex flex-col items-start gap-2'>
          <a href={`/`} className='inline space-x-1 bg-gray-100 px-2 py-1 text-gray-800 rounded-lg'>
            <FontAwesomeIcon icon={faArrowLeftLong} />
            <span>Kembali</span>
          </a>
          <div className='space-x-2 mt-3'>
            <button>
              <FontAwesomeIcon icon={faArrowUpWideShort} />
            </button>
            <button>
              <FontAwesomeIcon icon={faArrowDownShortWide} />
            </button>
          </div>
          <select className="w-full border border-gray-200 text-sm px-2 py-1 rounded-md">
            <option>Pilih Kategori</option>
          </select>
          <div className='w-full flex gap-2'>
            <input type="text" className="w-5/6 border border-gray-200 text-sm px-2 py-1 rounded-md" placeholder="Cari produk disini..." />
            <button className='w-auto bg-blue-500 px-2 rounded text-white'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
        </div>
        <div className='w-full md:w-5/6 space-y-3'>
          <div className='space-y-1'>
            <h4 className='text-xl font-bold'>Undangan Pernikahan</h4>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, soluta?</p>
          </div>
          <Catalog />
        </div>
      </div>
    </div>
  )
}

export default Product
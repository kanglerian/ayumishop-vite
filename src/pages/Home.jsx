import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='text-center space-y-1 mb-2'>
        <h3 className='text-3xl font-bold'>Ayumi Shop</h3>
        <p className='text-sm md:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, dolores.</p>
      </div>

      <div className='w-full flex flex-col md:flex-row justify-center px-3'>

        <div className='w-full md:w-1/4 p-1'>
          <a href={`/undangan-pernikahan`} className='flex justify-center rounded-lg items-center h-32 border border-gray-200 md:hover:bg-red-500 md:hover:text-white'>
            Undangan Pernikahan
          </a>
        </div>

        <div className='w-full md:w-1/4 p-1'>
          <a href={`/souvenir-pernikahan`} className='flex justify-center rounded-lg items-center h-32 border border-gray-200 md:hover:bg-red-500 md:hover:text-white'>
            Souvenir Pernikahan
          </a>
        </div>

        <div className='w-full md:w-1/4 p-1'>
          <div className='flex justify-center rounded-lg items-center h-32 border border-gray-200 md:hover:bg-red-500 md:hover:text-white'>
            Pulsa dan Token Listrik
          </div>
        </div>

        <div className='w-full md:w-1/4 p-1'>
          <div className='flex justify-center rounded-lg items-center h-32 border border-gray-200 md:hover:bg-red-500 md:hover:text-white'>
            Makanan
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
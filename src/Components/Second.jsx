import React from 'react';
import { BsFillCloudArrowUpFill } from 'react-icons/bs';
import { FaDatabase } from 'react-icons/fa';
import { HiServer, HiPaperAirplane } from 'react-icons/hi';
import bgimg from '../Pictures/cloud.jpg'

const Second = () => {
  return (
    <div name='second' className='w-full h-screen bg-indigo-300 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>New level production and Sequences</p>
          <h1 className='py-3 text-5xl md:text-7xl  text-red-600 font-bold'>Mutu Management</h1>
          <p className='text-2xl'>This is our Mutu brand.</p>
          <button className=' bg-red-400 py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
        </div>
        <div>
          <img className='w-full rounded-3xl' src={bgimg} alt="/" />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
        mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-indigo-200
        border border-slate-300 rounded-xl text-center shadow-xl'>
          <p>Data Services</p>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex -x-4 py-2 text-slate-500'><BsFillCloudArrowUpFill className='h-6 text-indigo-600' />Mutu Security</p>
            <p className='flex -x-4 py-2 text-slate-500'><FaDatabase className='h-6 text-indigo-600' />Mutu Design</p>
            <p className='flex -x-4 py-2 text-slate-500'><HiServer className='h-6 text-indigo-600' />Mutu Data</p>
            <p className='flex -x-4 py-2 text-slate-500'>< HiPaperAirplane className='h-6 text-indigo-600' /> Mutu API</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Second; 

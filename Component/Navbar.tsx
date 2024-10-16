import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-fuchsia-700 h-14'>
        <div className='text-slate-900 flex justify-between items-center'>
        <h1 className='text-xl m-2 cursor-pointer'>Navbar</h1>

        <ul className='flex gap-3 mr-4 cursor-pointer font-sans'>
        <Link className='hover: text-pink'  href="#">Home</Link>
        <Link className='hover: text-pink' href="About">About</Link>
        <Link href="Skills">Skills</Link>
        <Link href="Contact">Contact</Link>
      </ul>
      </div>
        </div>
  )
}

export default Navbar
import { navbar } from '@/src/constant/navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

  const router = useRouter();
  const [show, setShow] = useState(false)

  return (
    <div>

    {/* desktop section start */}
      <div className='bg-black text-white hidden md:flex'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center h-10'>
            <h1>Navbar</h1>
            <ul className='flex gap-5'>
              {
                navbar.map((data, index) => (
                  <li key={index}><Link className={`${router.pathname === data.link && 'text-sky-400' } hover:text-sky-400 duration-500`} href={data.link}>{data.title}</Link></li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      {/* desktop section end */}
      {/* mobile section start */}
      <div>
      <div className='md:hidden'>
        {/* title section start */}
        <div className='bg-black text-white h-16 flex items-center justify-between relative px-2'>
          <div>
            <Link href="/"><h1>Navbar</h1></Link>
          </div>
          <div>
            {
              show ? <button onClick={() => {setShow(false)}}><CloseIcon className='text-white w-6 h-6'></CloseIcon></button> : <button onClick={() => {setShow(true)}}><MenuIcon className='text-white w-6 h-6'></MenuIcon></button>
            }
          </div>
        </div>
        {/* title section end */}
        {/* navItem section start */}
        <div className={`absolute ${show ? 'top-16': '-top-96'} z-10 bg-black text-white w-full duration-700`}>
          {/* link section start */}
            <div className='md:flex gap-5 text-center'>
              <ul className='mt-2'>
              {
                navbar.map((data, index) => (
                  <li key={index} className='my-2'><Link className={`${router.pathname === data.link && 'text-sky-400' } hover:text-sky-400 duration-500`} href={data.link}>{data.title}</Link></li>
                ))
              }
              </ul>
            </div>
        </div>
        {/* navItem section end */}
      </div>
      </div>
      {/* mobile section end */}
    </div>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const iconVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.8,
    }
  }
}

const iconVariantII = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1
    }
  }
}

const iconVariantIII = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1.2,
    }
  }
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='sticky top-0 w-full h-[100px] flex justify-between items-center px-8 bg-[#0a192f]/[0.9] text-gray-300 font-bold'>
      <div>
        <span className='text-2xl font-Rochester text-[#ffffff]'>ANTHONY</span>
      </div>

      {/* menu */}
      <motion.ul className='hidden md:flex tracking-wider'
      
      >
        <motion.li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </motion.li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='resume' smooth={true} duration={500}>
            Resume
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </motion.ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars size={30}/> : <FaTimes size={30}/>}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-5xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-5xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-5xl'>
          {' '}
          <Link onClick={handleClick} to='resume' smooth={true} duration={500}>
            Resume
          </Link>
        </li>
        <li className='py-6 text-5xl'>
          {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-5xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-3'>
        <motion.ul
        >
          <motion.li className='w-[50px] h-[50px] rounded-full flex justify-between items-center bg-blue-600 mb-3'
          variants={iconVariantIII}
          initial='hidden'
          animate='visible'
          >
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/anthony-agah-04453332/' target='_blank'
            >
              <FaLinkedin size={30} />
            </a>
          </motion.li>
          <motion.li className='w-[50px] h-[50px] rounded-full flex justify-between items-center hover: duration-300 bg-[#333333] mb-3'
          variants={iconVariantII}
          initial='hidden'
          animate='visible'
          >
            <a
              className='flex justify-between items-center w-full text-gray-300' target='_blank'
              href='https://twitter.com/Anthony_Agah'
            >
              <FaTwitter size={30} />
            </a>
          </motion.li>
          <motion.li className='w-[50px] h-[50px] rounded-full flex justify-between items-center hover: duration-300 bg-[#31400d] mb-3'
          variants={iconVariant}
          initial='hidden'
          animate='visible'
          >
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:agah.anthony@gmail.com' target='_blank'
            >
              <HiOutlineMail size={30} />
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;

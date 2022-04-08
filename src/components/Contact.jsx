import React from 'react';
import { motion } from 'framer-motion';

import Arrow from '../assets/hero-arrow.svg';
import {
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const titleVariant = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1, 
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.5, 
      delay: 0.2
    }
  }
}

const subTitleVariant = {
  hidden: {
      y: -40,
      opacity: 0
  },
  visible: {
      y: 0,
      opacity: 1,
      transition: {
          type: 'tween',
          duration: 0.5,
          delay: 0.2
      }
  }
}

const messageVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      delay: 0.6,
      duration: 0.5
    }
  }
}

const devVariant = {
  hidden: {
      y: 40,
      opacity: 0
  },
  visible: {
      y: 0,
      opacity: 1,
      transition: {
          type: 'tween',
          delay: 1.0,
          duration: 0.4
      }
  }
}



const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 mt-12'>
      <div className='rounded-xl px-4 py-8 md:p-20 bg-gradient-to-b from-[#10142c] to-[#0a192f]'>
        <div className='md:flex justify-between items-end'>
          <div className='md:w-2/3'>
            <motion.h2 className='text-3xl font-bold md:text-6xl md:font-extrabold text-transparent bg-gradient-to-r from-yellow-100 to-cyan-600 bg-clip-text animate-shine mb-8'
            variants={titleVariant}
            initial='hidden'
            whileInView='visible'
            >
              LETS WORK TOGETHER
            </motion.h2>
            <motion.p className='text-[#c1e0db] text-xl leading-10'
            variants={subTitleVariant}
            initial='hidden'
            whileInView='visible'
            >
              Think I might be the best fit for your next project?<br/>
              Take a minute, I'd love to hear your ideas on this project.
              I am currently available to work full time, part time or on contract. 
            </motion.p>
          </div>
          <motion.div className='flex justify-between content-end mt-8'
            variants={messageVariant}
            initial='hidden'
            whileInView='visible'
          >
            <a href='mailto:agah.anthony@gmail.com' target='_blank' className='text-xl text-[#a1967a] font-bold mr-8 flex self-end'>Send Message</a>
            <img src={Arrow}/>
          </motion.div>
        </div>
        <div className='mt-16 border-t border-sky-500'></div>

        <ul className='flex justify-between w-4/5 mt-12 mx-auto bg-[#0a192f] items-center md:hidden'
        >
          <li className='w-[50px] h-[50px] rounded-full flex justify-between items-center bg-blue-600 mb-3'
          >
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/anthony-agah-04453332/' target='_blank'
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[50px] h-[50px] rounded-full flex justify-between items-center hover: duration-300 bg-[#333333] mb-3'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href = 'https://twitter.com/Anthony_Agah'
            >
              <FaTwitter size={30} />
            </a>
          </li>
          <li className='w-[50px] h-[50px] rounded-full flex justify-between items-center hover: duration-300 bg-[#31400d] mb-3'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:agah.anthony@gmail.com' target='_blank'
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>

        <motion.div className='mt-8 text-[#c1e0db] md:text-lg text-center'
        variants={devVariant}
        initial='hidden'
        whileInView='visible'
        >
          <p>Designed and Developed by <span className='text-[#a1967a] cursor-pointer'><a href='https://github.com/Akay74'>Akay</a></span> © 2022</p>
        </motion.div>
      </div>
    </div>
    
  )
}

export default Contact
import React from 'react';

import { motion, useSpring } from 'framer-motion';

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
      opacity: 0,
      y: -30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
        type: 'tween',
        delay: 0.3,
        duration: 0.5
    }
  }
}

const contentVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.7,
        delay: 0.3,
      }
    }
}


const Resume = () => {
  return (
    <div name='resume' className='w-full h-auto bg-[#0a192f] text-gray-300 my-8 p-4 md:p-0'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto py-4 flex flex-col justify-center w-full h-full'>
        <motion.div className='text-left pb-5'
        variants={titleVariant}
        initial="hidden"
        whileInView="visible"
        >
          <p className='text-4xl md:text-6xl font-bold inline border-b-4 border-pink-600 text-transparent bg-gradient-to-r from-yellow-100 to-cyan-600 bg-clip-text'>
            Resume
          </p>
        </motion.div>

        <motion.div
        variants={subTitleVariant}
        initial="hidden"
        whileInView="visible"
        >
          <p className='text-lg md:text-2l mt-12'>
            Click the button below to download my resume
          </p>
        </motion.div>

        <motion.div className='mt-12 border border-[#a1967a]/[0.6] bg-[#a1967a]/[0.6] w-48 text-center px-2 py-4 text-lg md:text-xl hover:bg-[#a1967a] hover:border-[#a1967a] cursor-pointer hover:text-[#fff]'
        variants={contentVariant}
        initial="hidden"
        whileInView="visible"
        >
          {/*https://filebin.net/4zqrt14wfnviy94h/Agah_Anthony_CV_PM_Application.pdf*/}
          <a
            href="https://drive.google.com/file/d/1EX91Z2nNxjt5eC1H8j6HZv_CM6SGOPRG/view?usp=sharing" target='_blank'
            download
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Resume;

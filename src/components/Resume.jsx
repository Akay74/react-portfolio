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
        y: -30
    },
    visible: {
        y: 0,
        transition: {
            type: 'tween',
            delay: 0.2,
            duration: 0.5
        }
    }
}

const contentVariant = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.7,
        delay: 0.8,
        staggerChildren: 0.5
      }
    }
}


const Resume = () => {
  return (
    <div name='resume' className='w-full h-auto bg-[#0a192f] text-gray-300 my-8'>
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

        <div>
          <p className='text-lg md:text-2l mt-12'>
            Click the button below to download my resume
          </p>
        </div>

        <div className='mt-12 border border-[#a1967a]/[0.6] bg-[#a1967a]/[0.6] w-48 text-center px-2 py-4 text-lg md:text-xl hover:bg-[#a1967a] hover:border-[#a1967a] cursor-pointer hover:text-[#fff]'>
            <a
              href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target='_blank'
              download
            >
              Download Resume
            </a>
        </div>

      </div>
    </div>
  );
};

export default Resume;

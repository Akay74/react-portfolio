import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants/Constants';

import Lazerpay from '../assets/lazerpay.jpeg';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Xend from '../assets/xend.jpeg';
import Swappify from '../assets/swappify.jpeg';
import Decentral from '../assets/decentral.jpeg';
import Sabi from '../assets/sabi.jpeg';

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
      delay: 0.5,
      staggerChildren: 0.4
    }
  }
}

const Projects = () => {
  return (
    <div name='projects' id='projects' className='w-full md:h-auto text-gray-300 bg-[#0a192f] mt-24'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <motion.p className='pb-2 text-4xl md:text-6xl mb-5 font-bold inline-block border-b-4 text-transparent bg-gradient-to-r from-yellow-100 to-cyan-600 bg-clip-text border-pink-600'
          variants={titleVariant}
          initial='hidden'
          whileInView='visible'
          >
            Projects
          </motion.p>
          <motion.p className='py-6 text-xl'
          variants={subTitleVariant}
          initial='hidden'
          whileInView='visible'
          >
            Check out some of my projects
          </motion.p>
        </div>

        {/* Container */}
        <motion.div className='grid sm:grid-cols-1 md:grid-cols-2 gap-12'
          variants={contentVariant}
          initial='hidden'
          whileInView='visible'
        >

            {/* Grid Item */}

          {projects.map(({id, title, description, image, source}) => (
            <motion.div
            className='group container bg-[#0a192f] hover:bg-[#0a192f]/[0.7] h-auto rounded-xl mx-auto p-4 border-solid border border-[#968C7F]'
            variants={contentVariant}
            initial='hidden'
            whileInView='visible'
            key={id}
            >
              <motion.h2 className='text-4xl font-bold my-5 text-white'>{title}</motion.h2>
              <motion.p className='leading-8 text-lg'>{description}</motion.p>
              <motion.div className='my-8 text-lg'>
                <a href={source} target='_blank' className='flex items-center text-[#a1967a] text-xl'>Visit Site 
                  <span className=''>
                    <HiArrowNarrowRight className='ml-3 ' />
                  </span>
                </a>
              </motion.div>
              <motion.div className='mt-16'>
                <img src={image} className='h-48 w-full self-end'/>
              </motion.div>
            </motion.div>
          ))}
          
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

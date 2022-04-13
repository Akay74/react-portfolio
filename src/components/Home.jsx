import React from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import { HiArrowNarrowRight } from 'react-icons/hi';
import hero from '../assets/home-hero-image.png';

const heroTextVariant = {
  hidden: {
    y: -20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.8,
      delay: 1.7
    }
  }
}

const heroNameVariant = {
  hidden: {
    y: -20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.8,
      delay: 1.2
    }
  }
}

const smallHeroTextVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.6
    }
  }
}

const heroIntroVariant = {
  hidden: {
    y: -20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.8,
      delay: 2.2
    }
  }
}

const viewProjectsVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 2.8
    }
  }
}

const Home = () => {

  return (
    <div name='home' className='w-full bg-[#0a192f] h-full mt-8 flex items-center'>
      {/* Container */}
      <div className='max-w-[1000px] md:w-2/4 px-8 flex flex-col justify-between flex-start'>
        <motion.p className='text-cyan-600 font-bold text-lg mb-5'
        variants={smallHeroTextVariant}
        initial="hidden"
        animate="visible"
        >
          Hi there, I am
        </motion.p>
        <motion.h1 className='text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-yellow-100 to-cyan-600 bg-clip-text my-5'
        variants={heroNameVariant}
        initial="hidden"
        animate="visible"
        >
          Anthony
        </motion.h1>
        <motion.h2 className='text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-100 to-cyan-600 bg-clip-text my-4'
        variants={heroTextVariant}
        initial="hidden"
        animate="visible"
        >
          A Digital Product Manager
        </motion.h2>
        <motion.p className='text-[#dfdfe8] py-4 max-w-[700px] leading-8 text-lg'
        variants={heroIntroVariant}
        initial="hidden"
        animate="visible"
        >
          I create solutions that enable strides in business and iterating on already defined pathways to 
          attain desired results while ensuring plausible experiences on both ends of delivery.
        </motion.p>
        <motion.p className='text-[#dfdfe8] py-4 max-w-[700px] leading-8 text-lg mt-2'
        variants={viewProjectsVariants}
        initial="hidden"
        animate="visible"
        >
          You can check out some of my
          <span className='text-[#a1967a] cursor-pointer'>
            <Link to='projects' smooth={true} duration={500} className=''> projects </Link>
          </span>
          or view my 
          <span className='text-[#a1967a] cursor-pointer'><Link to='resume' smooth={true} duration={500} > resume</Link></span>
        </motion.p>
      </div>
      <div className='w-2/4 h-[70vh] hidden md:inline-block p-auto'>
        <img src={hero} className='h-full w-4/5 flex self-center m-auto'/>
      </div>
    </div>
  );
};

export default Home;

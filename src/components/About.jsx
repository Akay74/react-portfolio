import React from 'react';

import { motion } from 'framer-motion';

const titleVariant = {
  hidden: {
    opacity: 0,
    y: 40
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
      delay: 0.7
    }
  }
}

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-[#0a192f] text-gray-300 my-24 px-4'>
      <div className='flex flex-col items-center w-full h-full'>
        <div className='max-w-[1000px] w-full'>
          <motion.div className='text-left pb-5'
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          >
            <p className='text-4xl md:text-6xl font-bold inline border-b-4 border-pink-600 text-transparent bg-gradient-to-r from-yellow-100 to-cyan-600 bg-clip-text'>
              About
            </p>
          </motion.div>
          </div>
          <div className='max-w-[1000px]'>
            <motion.div className='text-4xl font-bold my-6'
            variants={contentVariant}
            initial="hidden"
            whileInView="visible"
            >
              <p>Hello, nice to meet you.</p>
            </motion.div>
            <motion.div className='leading-8 text-lg'
            variants={contentVariant}
            initial="hidden"
            whileInView="visible"
            >
              <p>I'm an ever crypto-curious and passionate product manager interested and focused on 
                building products that can change the world and provide impactful solutions to those that need it.<br/><br/>
                Building products excites my mind and executing gives me fulfilment and purpose with regards to work. 
                I love solving problems that users encounter while keeping the industry and global standards with regards the agile methodologies.<br/><br/>
                I have over 3 years experience in building accessible, seamless and usable products in web2 and web3. 
              </p>  
            </motion.div>
          </div>
      </div>
    </div>
  );
};

export default About;

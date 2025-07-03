import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const OverviewPage = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [coderEnabled, setCoderEnabled] = useState(false);
  const [editorEnabled, setEditorEnabled] = useState(false);

  const projects = [
    { title: 'KJ Station', image: '/assets/kjstation.jpg' },
    { title: 'Small Shell', image: '/assets/smallsh.jpg' },
    { title: 'Goodplays', image: '/assets/goodplays.jpg' },
    { title: 'Robot Platformer', image: '/assets/platformer.jpg' },
    { title: 'Vending Machine', image: '/assets/vending.jpg' },
    { title: 'Rock Paper Scissors', image: '/assets/rps.jpg' }
  ];

  const skillsData = {
    'Computer Science': 85,
    'Video Editing': 75,
    'Programming Languages': 90,
    'Database Management': 70,
    'Data Structures': 85,
    'Algorithms': 80,
    'Problem Solving': 95,
    'Embedded Systems': 65,
    'Software Development': 88,
    'Networks and Security': 72
  };

  const externalLinks = {
    linkedin: 'https://www.linkedin.com/in/allyson-aoki/',
    github: 'https://github.com/aokiam',
    handshake: 'https://oregonstate.joinhandshake.com/profiles/g4xbjf'
  };

  const handleExternalLink = (platform) => {
    window.open(externalLinks[platform], '_blank');
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <motion.div className='min-h-screen bg-purple-50 p-4 sm:p-6 md:p-8 lg:p-12'>
      <div className='h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)] md:h-[calc(100vh-4rem)] lg:h-[calc(100vh-6rem)] max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 h-full'>
          {/* CLOSE BUTTON */}
          <motion.button className='fixed top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 z-10 bg-purple-300 rounded-full p-2 sm:p-3 transition-all'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ delay: 0.1 }}
                      >
                        <X className='w-5 h-5 sm:w-6 sm:h-6 text-purple-10'/>
          </motion.button>

          {/* AVATAR */}
          <div className='lg:col-span-3 bg-purple-300 shadow-2.5xl'>
            <div className='h-64 sm:h-80 md:h-96 lg:h-full w-full bg-purple-300'></div>
          </div>

          { /* SOCIAL BUTTONS */}
          <div className='lg:col-span-6 flex flex-col gap-6 sm:gap-8 md:gap-10'>
            <div className='flex-1 bg-purple-300 shadow-2.5xl'>
              <div className='h-full w-full bg-purple-300'>

              </div>
            </div>

          {/* PORTFOLIO PREVIEW */}
            <div className='flex-[2] bg-purple-300 shadow-2.5xl'>
              <div className='h-full w-full bg-purple-300'>

              </div>
            </div>
          </div>

          { /* SKILLS */}
          <div className='lg:col-span-3 bg-purple-300 shadow-2.5xl'>
            <div className='h-64 sm:h-80 md:h-96 lg:h-full w-full bg-purple-300'></div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};


export default OverviewPage;
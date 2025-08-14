import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';

const OverviewPage = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [avatarMode, setAvatarMode] = useState('default'); // 'default', 'coder', 'editor'
  const [skillsMode, setSkillsMode] = useState('coding'); 

  const projects = [
    { title: 'KJ Station', image: '/assets/kjstation.jpg' },
    { title: 'Small Shell', image: '/assets/smallsh.jpg' },
    { title: 'Goodplays', image: '/assets/goodplays.jpg' },
    { title: 'Robot Platformer', image: '/assets/platformer.jpg' },
    { title: 'Vending Machine', image: '/assets/vending.jpg' },
    { title: 'Rock Paper Scissors', image: '/assets/rps.jpg' }
  ];

  const skillsData = {
    coding: {
      'Programming Languages': 90,
      'Database Management': 70,
      'Data Structures': 85,
      'Algorithms': 80,
      'Problem Solving': 95,
      'Embedded Systems': 65,
      'Software Development': 88,
      'Networks and Security': 72
    },
    editing: {
      'Adobe After Effects': 100,
      'Adobe Premiere Pro': 85,
      'Adobe Photoshop': 90,
      'Adobe Illustrator': 80,
      'Adobe Indesign': 60,
      'Adobe Audition': 40,
      'Color Grading': 70,
      'Final Cut Pro': 65
    }
  };

  const getAvatarImage = () => {
    switch(avatarMode) {
      case 'coder':
        return '/assets/me-cs.png';
      case 'editor':
        return '/assets/me-ve.png';
      default:
        return '/assets/me.png';
    }
  };

  const handleAvatarMode = (mode) => {
    if (avatarMode === mode){
      setAvatarMode('default');
    } else {
      setAvatarMode(mode);
    }
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

  const SkillBar = ({ skill, level }) => (
    <div className='mb-3'>
      <div className='text-purple-50 font-jersey text-lg mb-1'>{skill}</div>
      <div className='w-full bg-purple-100 rounded-full h-2'>
        <motion.div
          className='bg-purple-50 h-2 rounded-full'
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.8, delay: 0.2 }} />
      </div>
    </div>
  );

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

          {/* LEFT BOX */}
          <div className='lg:col-span-3 bg-purple-300 shadow-2.5xl'>
            <div className='h-64 sm:h-80 md:h-96 lg:h-full w-full bg-purple-300'>
              {/* NAME HEADER */}
              <div className='bg-purple-100 text-purple-10 p-2'>
                <h1 className='text-4xl sm:text-4xl font-jersey text-purple-10 ml-4'>Allyson</h1>
              </div>

              {/* AVATAR */}
              <div className='lg:col-span-3 overflow-hidden m-6'>
                <div className='h-full flex flex-col'>

                  {/* image box */}
                  <div className='flex-1 bg-purple-50 flex items-center justify-center p-4'>
                    <div className='w-48 h-48 sm:w-48 sm:h-48 lg:w-48 lg:h-48 overflow-visible bg-purple-50'>
                      <AnimatePresence mode='wait'>
                        <motion.img 
                          key={ avatarMode }
                          src={ getAvatarImage() }
                          alt='Ally Avatar'
                          className='w-full h-full object-cover'
                          initial={{ y: -20 }}
                          animate={{
                            y: 0,
                            transition: {
                              type: 'spring',
                              stiffness: 300,
                              damping: 10
                            }
                          }}
                          exit={{ y: 0 }}
                          />
                      </AnimatePresence>
                    </div>
                  </div>
                  {/* contact button */}
                  <Button
                    size='rect-small'
                    color='orange'
                    className='mt-6 mb-7'>contact</Button>
                  

                  {/* customization buttons */}
                  <div className='bg-purple-100 space-y-3 pb-4 pt-1'>
                    <h2 className='text-purple-50 font-jersey text-center text-2xl'>face customization</h2>

                    <div className='flex items-center justify-center bg-purple-50 m-3'>
                      <h3 className='text-purple-100 font-jersey justify-center p-1 text-5xl pr-5'>CODER</h3>
                      <button
                        onClick={() => handleAvatarMode('coder')}
                        className='w-14 h-8 rounded-full bg-purple-100'>
                          <div className={`w-6 h-6 rounded-full bg-purple-50 transition-transform ${
                            avatarMode === 'coder' ? 'translate-x-7' : 'translate-x-1'
                          }`}/>
                      </button>
                    </div>

                    <div className='flex items-center justify-center bg-purple-50 m-3'>
                      <h3 className='text-purple-100 font-jersey justify-center p-1 text-5xl pr-5'>EDITOR</h3>
                      <button
                        onClick={() => handleAvatarMode('editor')}
                        className='w-14 h-8 rounded-full bg-purple-100'>
                          <div className={`w-6 h-6 rounded-full bg-purple-50 transition-transform ${
                            avatarMode === 'editor' ? 'translate-x-7' : 'translate-x-1'
                          }`}/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          { /* MIDDLE SECTION */}
          <div className='lg:col-span-6 flex flex-col gap-6 sm:gap-8 md:gap-10 ml-8 mr-8'>

            { /* SOCIAL BUTTONS*/ }
            <div className='flex-1 bg-purple-300 shadow-2.5xl'>
              <div className='h-full w-full bg-purple-300 flex gap-12 p-5 justify-center items-center'>
                <Button 
                  className='mb-3'
                  color='scarlet'
                  size='small'
                  navigateTo={externalLinks.linkedin}
                  image='/assets/linkedin.png'
                  imageSize='small'></Button>
                <Button
                  className='mb-3'
                  color='aqua'
                  size='small'
                  navigateTo={externalLinks.github}
                  image='/assets/github.png'
                  imageSize='large'></Button>
                <Button
                  className='mb-3'
                  color='pink'
                  size='small'
                  navigateTo={externalLinks.handshake}
                  image='/assets/handshake.png'
                  imageSize='medium'></Button>
              </div>
            </div>

          
          {/* PORTFOLIO PREVIEW */}
            <div className='flex-[2] bg-purple-300 shadow-2.5xl'>
              <div className='h-full w-full bg-purple-300'>
                <button onClick={prevProject}
                        className=''>
                  <ChevronLeft className='w-6 h-6 text-purple-50'/>
                </button>
              </div>
            </div>
          </div>


          { /* SKILLS */}
          <div className='lg:col-span-3 bg-purple-300 shadow-2.5xl'>
            <div className='h-64 sm:h-80 md:h-96 lg:h-full w-full bg-purple-300'>
              <div className='bg-purple-100 text-purple-10 p-2'>
                <h1 className='text-4xl sm:text-4xl font-jersey text-purple-10 ml-4'>Skills</h1>

                { /* skills mode toggle */}
                <div className='flex bg-purple-100 rounded-full p-1 mr-4'>
                  <button onClick={() => setSkillsMode('coding')}
                          className={`px-3 py-1 rounded-full text-md font-jersey transition-colors
                                      ${skillsMode === 'coding' ? 'bg-purple-50 text-purple-300' : 'text-purple-100 hover:text-purple-300'}`}>
                                        Computer Science
                  </button>
                  <button onClick={() => setSkillsMode('editing')}
                          className={`px-3 py-1 rounded-full text-md font-jersey transition-colors
                                      ${skillsMode === 'editing' ? 'bg-purple-50 text-purple-300' : 'text-purple-100 hover:text-purple-300'}`}>
                                        Video Editing
                  </button>
                </div>
              </div>

              {/*skills content */}
              <div className='p-4 h-full overflow-y-auto'>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={skillsMode}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {Object.entries(skillsData[skillsMode]).map(([skill, level]) => (
                      <SkillBar key={skill} skill={skill} level={level} />
                    ))}
                  </motion.div>
                </AnimatePresence>

                <Button
                  color='orange'
                  size='rect-small'
                  className='mt-6 w-full'>
                    about me
                  </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default OverviewPage;
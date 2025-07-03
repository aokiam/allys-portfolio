import './App.css';
import OverviewPage from './OverviewPage'
import HomePage from './HomePage'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [nextPage, setNextPage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigation = (page) => {
    if (page === currentPage || isTransitioning) return;

    setNextPage(page);
    setIsTransitioning(true);


    setTimeout(() => {
      setCurrentPage(page);
      setNextPage(null);
      setIsTransitioning(false);
    }, 600);
  };

  const renderPage = (pageType) => {
    switch(pageType) {
      case 'overview':
        return <OverviewPage onNavigate={handleNavigation} />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className='relative overflow-hidden h-screen'>
      {nextPage && (
        <div className='absolute inset-0 z-0'>
          {renderPage(nextPage)}
          </div>
      )}

      <AnimatePresence>
        {!isTransitioning && (
          <motion.div
            key={currentPage}
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              duration: 0.6
            }}
            className='relative inset-0 z-10'
          >
            {renderPage(currentPage)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

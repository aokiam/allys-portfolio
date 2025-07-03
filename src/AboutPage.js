  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  const pageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      x: -50,
      transition: { duration: 0.3 }
    }
  };

  const HomePage = () => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex items-center justify-center p-4"
    >
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-7xl w-full h-full max-h-[95vh]">
        {/* Profile Section */}
        <motion.div 
          className="bg-slate-700 rounded-2xl p-4 lg:p-6 flex-shrink-0 w-full lg:w-80 h-full lg:h-auto flex flex-col"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-white h-full flex flex-col">
            <h1 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-gray-300 flex-shrink-0">Allyson</h1>
            
            {/* Avatar */}
            <div className="bg-purple-300 rounded-lg p-4 mb-4 lg:mb-6 flex items-center justify-center flex-1 min-h-[100px] max-h-[200px]">
              <div className="w-16 h-16 lg:w-24 lg:h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="text-xl lg:text-2xl">👩‍💻</div>
              </div>
            </div>

            {/* Contact Button */}
            <motion.button 
              className="w-full bg-orange-400 text-white py-2 lg:py-3 rounded-lg font-semibold mb-4 lg:mb-6 text-sm lg:text-base flex-shrink-0"
              whileHover={{ scale: 1.05, backgroundColor: '#fb923c' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentPage('contact')}
            >
              contact
            </motion.button>

            {/* Face Customization */}
            <div className="space-y-3 lg:space-y-4 mt-auto flex-shrink-0">
              <h3 className="text-gray-300 font-medium text-sm lg:text-base">face customization</h3>
              
              <div className="flex items-center justify-between">
                <span className="text-purple-300 font-medium text-sm lg:text-base">CODER</span>
                <motion.button
                  className={`w-10 h-5 lg:w-12 lg:h-6 rounded-full p-1 transition-colors ${coderEnabled ? 'bg-purple-400' : 'bg-gray-600'}`}
                  onClick={() => setCoderEnabled(!coderEnabled)}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full"
                    animate={{ x: coderEnabled ? (window.innerWidth >= 1024 ? 24 : 20) : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-purple-300 font-medium text-sm lg:text-base">EDITOR</span>
                <motion.button
                  className={`w-10 h-5 lg:w-12 lg:h-6 rounded-full p-1 transition-colors ${editorEnabled ? 'bg-purple-400' : 'bg-gray-600'}`}
                  onClick={() => setEditorEnabled(!editorEnabled)}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full"
                    animate={{ x: editorEnabled ? (window.innerWidth >= 1024 ? 24 : 20) : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-4 lg:gap-6 h-full min-h-0">
          {/* Social Links */}
          <motion.div 
            className="bg-slate-700 rounded-2xl p-4 lg:p-6 flex justify-center gap-4 lg:gap-8 flex-shrink-0"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.button 
              className="w-12 h-12 lg:w-16 lg:h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm lg:text-xl font-bold"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleExternalLink('linkedin')}
            >
              in
            </motion.button>
            <motion.button 
              className="w-12 h-12 lg:w-16 lg:h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-lg lg:text-2xl"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleExternalLink('github')}
            >
              🐱
            </motion.button>
            <motion.button 
              className="w-12 h-12 lg:w-16 lg:h-16 bg-pink-400 rounded-full flex items-center justify-center text-white text-sm lg:text-xl font-bold"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleExternalLink('handshake')}
            >
              H
            </motion.button>
          </motion.div>

          {/* Projects Section */}
          <motion.div 
            className="bg-slate-700 rounded-2xl p-4 lg:p-6 flex-1 min-h-0 flex flex-col"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between flex-1 min-h-0 mb-4">
              <motion.button 
                className="p-2 text-gray-400 hover:text-white transition-colors flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevProject}
              >
                <ChevronLeft size={20} className="lg:w-6 lg:h-6" />
              </motion.button>
              
              <div className="flex-1 mx-2 lg:mx-4 min-h-0">
                <div className="bg-gray-100 rounded-lg p-4 h-full min-h-[120px] lg:min-h-[180px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl lg:text-5xl mb-2 lg:mb-4">🎮</div>
                    <h3 className="text-base lg:text-xl font-semibold text-gray-800">Games</h3>
                    <p className="text-gray-600 mt-1 lg:mt-2 text-xs lg:text-base">Interactive web experiences</p>
                  </div>
                </div>
              </div>
              
              <motion.button 
                className="p-2 text-gray-400 hover:text-white transition-colors flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextProject}
              >
                <ChevronRight size={20} className="lg:w-6 lg:h-6" />
              </motion.button>
            </div>

            <div className="flex justify-center mb-4 flex-shrink-0">
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentProjectIndex ? 'bg-orange-400' : 'bg-gray-500'}`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </div>

            <motion.button 
              className="w-full bg-orange-400 text-white py-2 lg:py-3 rounded-lg font-semibold text-sm lg:text-base flex-shrink-0"
              whileHover={{ scale: 1.02, backgroundColor: '#fb923c' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentPage('projects')}
            >
              learn more
            </motion.button>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div 
          className="bg-slate-700 rounded-2xl p-4 lg:p-6 w-full lg:w-80 h-full lg:h-auto flex flex-col"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-white h-full flex flex-col">
            <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-gray-300 flex-shrink-0">Skills</h2>
            
            <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-6 flex-shrink-0">
              <div className="flex items-center gap-2 lg:gap-4">
                <span className="text-purple-300 text-xs lg:text-sm">COMPUTER SCIENCE</span>
                <div className="w-10 h-5 lg:w-12 lg:h-6 bg-purple-400 rounded-full p-1">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full" />
                </div>
                <span className="text-purple-300 text-xs lg:text-sm">VIDEO EDITING</span>
              </div>
            </div>
            
            <div className="flex-1 min-h-0 overflow-y-auto space-y-3 lg:space-y-4 pr-2 mb-4 lg:mb-6">
              {Object.entries(skillsData).map(([skill, level]) => (
                <div key={skill} className="space-y-1">
                  <div className="text-xs lg:text-sm text-gray-300">{skill}</div>
                  <div className="w-full bg-gray-600 rounded-full h-1.5 lg:h-2">
                    <motion.div 
                      className="bg-purple-400 h-1.5 lg:h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <motion.button 
              className="w-full bg-orange-400 text-white py-2 lg:py-3 rounded-lg font-semibold text-sm lg:text-base flex-shrink-0 mt-auto"
              whileHover={{ scale: 1.02, backgroundColor: '#fb923c' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentPage('about')}
            >
              about me
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Close Button */}
      <motion.button 
        className="absolute top-4 right-4 lg:top-8 lg:right-8 w-10 h-10 lg:w-12 lg:h-12 bg-slate-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCurrentPage('home')}
      >
        <X size={20} className="lg:w-6 lg:h-6" />
      </motion.button>
    </motion.div>
  );

  const ContactPage = () => (
    <motion.div 
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex items-center justify-center p-4"
    >
      <div className="bg-slate-700 rounded-2xl p-6 lg:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto text-white">
        <div className="flex items-center justify-between mb-6 lg:mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold">Contact Me</h1>
          <motion.button 
            className="p-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('home')}
          >
            <X size={20} className="lg:w-6 lg:h-6" />
          </motion.button>
        </div>
        
        <div className="space-y-4 lg:space-y-6">
          <div>
            <h3 className="text-lg lg:text-xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-300 text-sm lg:text-base">Feel free to reach out for collaborations or just a friendly hello!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.a
              href="mailto:allyson@example.com"
              className="bg-orange-400 text-white p-3 lg:p-4 rounded-lg text-center font-semibold text-sm lg:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Email Me
            </motion.a>
            <motion.button
              className="bg-purple-400 text-white p-3 lg:p-4 rounded-lg font-semibold text-sm lg:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleExternalLink('linkedin')}
            >
              LinkedIn
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const AboutPage = () => (
    <motion.div 
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex items-center justify-center p-4"
    >
      <div className="bg-slate-700 rounded-2xl p-6 lg:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto text-white">
        <div className="flex items-center justify-between mb-6 lg:mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold">About Me</h1>
          <motion.button 
            className="p-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('home')}
          >
            <X size={20} className="lg:w-6 lg:h-6" />
          </motion.button>
        </div>
        
        <div className="space-y-4 lg:space-y-6">
          <div>
            <h3 className="text-lg lg:text-xl font-semibold mb-4">Hi, I'm Allyson!</h3>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              I'm a passionate developer and video editor with a strong background in computer science. 
              I love creating engaging digital experiences and bringing ideas to life through code and creative media.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg lg:text-xl font-semibold mb-4">What I Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-600 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-400 mb-2 text-sm lg:text-base">Development</h4>
                <p className="text-gray-300 text-xs lg:text-sm">Full-stack development with modern frameworks and technologies</p>
              </div>
              <div className="bg-slate-600 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-400 mb-2 text-sm lg:text-base">Video Editing</h4>
                <p className="text-gray-300 text-xs lg:text-sm">Creative video production and post-processing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const ProjectsPage = () => (
    <motion.div 
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex items-center justify-center p-4"
    >
      <div className="bg-slate-700 rounded-2xl p-6 lg:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto text-white">
        <div className="flex items-center justify-between mb-6 lg:mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold">My Projects</h1>
          <motion.button 
            className="p-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('home')}
          >
            <X size={20} className="lg:w-6 lg:h-6" />
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-slate-600 rounded-lg p-4 lg:p-6 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-3xl lg:text-4xl mb-4">🎮</div>
              <h3 className="text-base lg:text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-xs lg:text-sm">Click to learn more</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {currentPage === 'home' && <HomePage key="home" />}
        {currentPage === 'contact' && <ContactPage key="contact" />}
        {currentPage === 'about' && <AboutPage key="about" />}
        {currentPage === 'projects' && <ProjectsPage key="projects" />}
      </AnimatePresence>
    </div>
  );
import { motion } from 'framer-motion'
import Button from "./Button"

function HomePage({ onNavigate }) {
    return (
        <div className="min-h-screen bg-purple-300 p-4 flex items-center justify-center">
            <motion.div className="bg-purple-50 shadow-3xl p-12 max-w-lg w-full text-center aspect-square relative"
                                    initial={{ opactiy: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}>
                <h1 className="text-white text-6xl md:text-9xl mb-6 tracking-wider font-jersey">
                    Ally Aoki
                </h1>
                <p className="text-purple-10 text-1xl md:text-3xl mb-10 font-jersey">
                    Fourth-year Computer Science <br />student at Oregon State University
                </p>
                <div className='flex justify-center'>
                    <Button 
                        navigateTo="overview"
                        onClick={onNavigate}
                        color="yellow"
                        size="medium"
                    >
                    </Button>
                </div>
            </motion.div>
        </div>
    )
}

export default HomePage;
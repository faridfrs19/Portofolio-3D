import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center'>
            <div className='w-5 h-5 ms-4 rounded-full bg-[#1f2d99]'/>
            <div className='w-1 ms-4 sm:h-80 h-40 blue-gradient'/>
        </div>

        <div>
          <h2 className={`${styles.heroFirstText} text-white mb-0`}>Hi, Welcome</h2>
          <h1 className={`${styles.heroHeadText} text-white mb-0`}>I'm <span className='text-[#1f2d99]'>Farid Firdaus</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mb-0`}>I Web Developer In Vocational Highschool SMKN 1 Ciomas</p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <a href='#about'>
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className='w-[35px] h-[64px] flex flex-col justify-start items-center p-2'
        >
          <div className='w-1 h-8 bg-white mb-1' />
          <div className='w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white' />
        </motion.div>
      </a>
    </div>
    </section>
  )
}

export default Hero
import React from "react";
import { motion } from "framer-motion";

import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-[310px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[260px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="about">
        <p className={`${styles.sectionSubText} flex justify-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} flex justify-center`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='text-left sm:text-center mx-10 sm:mx-auto mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Murid SMKN 1 Ciomas yang berminat dalam bidang teknologi dan pemrograman, 
        saya sangat tertarik untuk menjadi seorang SOFTWARE ENGINEERING. 
        Berpengalaman dalam mengerjakan project project sekolah untuk membuat website 
        dan design, hal yang sangat saya sukai adalah ketika harus melakukan 
        hal-hal yang menggunakan kreatifitas dan hal seperti problem solving
        yang mengharuskan berpikir secara logis.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-12'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
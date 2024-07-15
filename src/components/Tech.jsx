import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText} text-end`}>
      WHAT I'M LEARN
    </p>
    <h2 className={`${styles.sectionHeadText} text-end`}>
    Leanguage
    </h2>
  </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-4'>
      {technologies.map((technology) => (
        <div className='w-40 h-50 bg-white-100 rounded-full flex justify-center items-center' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

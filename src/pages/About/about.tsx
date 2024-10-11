import { AboutContainer} from "./aboutStyles";
import {EducationContainer } from "./educationStyles";
import {WorkContainer } from "./workStyles";
// import ScrollButton from './ScrollDownArrow';
import "./ScrollDownArrow.css";


import ChrisWallace from "../../assets/PersonalPhoto.jpg";
// import wordpress from "../../assets/wordpress.svg";
import pythonIcon from "../../assets/python-logo-only.svg";
import cppIcon from "../../assets/cpp.svg";
import matlabIcon from "../../assets/matlab-svgrepo-com.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import tsIcon from "../../assets/typescript-icon.svg"
import tensorFlowIcon from "../../assets/Tensorflow_logo.svg"
import pytorchIcon from "../../assets/PyTorch_logo_icon.svg"


// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
// import typescriptIcon from "../../assets/typescript-icon.svg";
// import vueIcon from "../../assets/vue-icon.svg";
// import boostrapIcon from "../../assets/bootstrap-icon.svg";
// import ScrollAnimation from "react-animate-on-scroll";
import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import clemsonLogo from "../../assets/Clemson.svg";
import gtLogo from "../../assets/Georgia_Tech_logo_2021.svg";

import landisLogo from "../../assets/landis-gyr-logo-vector.svg";
import fhLogo from "../../assets/FH-Bandaid-Logo-White-Text--1024x682.png";
import ametekLogo from "../../assets/Ametek_Logo.svg";

const fadeInDown = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0 },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -500 },
  visible: { opacity: 1, x: 0 },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};
// const growIn = {
//   hidden: { opacity: 0, y: 150, scale: 0.5 }, // Start from half size
//   visible: { opacity: 1, y: 0, scale: 1 }, // Animate to full size
// };



export function About() {
  return (

    
    <>
    <AboutContainer id="about">
      <div className="about-text">
        <motion.h1 initial="hidden" animate="visible" variants={fadeInDown} transition={{ duration: 1 }}>
          About me!
        </motion.h1>
        <hr/>
        <motion.p initial="hidden" animate="visible" variants={fadeInLeft} transition={{ duration: 1, delay: 0.5}}>
          Hey there, my name's Christopher! I'm an Implementation Engineer with a passion towards research and innovation. 
          My interests surround software design and development, artificial intelligence, machine learning, computer vision, and natural language processing.
        </motion.p>
        <motion.p initial="hidden" animate="visible" variants={fadeInLeft} transition={{ duration: 1, delay: 0.75}}>
          In addition to my full-time role, I work part-time within web-development and am a CS Masters student at Georgia Tech specializing in Machine Learning.
        </motion.p>
        <motion.p initial="hidden" animate="visible" variants={fadeInLeft} transition={{ duration: 1, delay: 1.0}}>
          Over the years I've built a strong foundation on engineering principles and concepts that allow me to adapt between various industries to apply my skills.
        </motion.p>

        <motion.div initial="hidden" animate="visible" variants={fadeInLeft} transition={{ duration: 1, delay: 1.25}}>
          <h3>Below are a few of my skillsets:</h3>
        </motion.div>
        <div className="hard-skills">
          <div className="hability">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 1, delay: 1.3 }}>
              <img src={cppIcon} alt="C Plus Plus" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 1, delay: 1.4 }}>
              <img src={matlabIcon} alt="Matlab" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 1, delay: 1.5 }}>
              <img src={pythonIcon} alt="Python" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 1, delay: 1.6 }}>
              <img src={tensorFlowIcon} alt="Tensor Flow" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 1, delay: 1.7 }}>
              <img src={pytorchIcon} alt="Pytorch" />
            </motion.div>
          </div>
        </div>
        <div className="hard-skills">
          <div className="hability">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 1, delay: 1.8 }}>
              <img src={htmlIcon} alt="Html" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 1, delay: 1.9 }}>
              <img src={cssIcon} alt="Css" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 1, delay: 2 }}>
              <img src={jsIcon} alt="JavaScript" />
            </motion.div>
          </div>

          <div className="hability">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 1, delay: 2.1 }}>
              <img src={tsIcon} alt="Typescript" className="rounded-svg"/>
            </motion.div>
          </div>
          <div className="hability">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 1, delay: 2.2 }}>
              <img className="reactSpin" src={reactIcon} alt="React" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="about-image">
        <motion.div initial="hidden" animate="visible" variants={fadeInRight} transition={{ duration: 1 }}>
              <img src={ChrisWallace} alt="Chris Wallace" />
        </motion.div>
      </div>
    </AboutContainer>

    {/* <ScrollButton targetId="education">▼ Scroll to Education ▼</ScrollButton> */}

    <EducationContainer id="education">
      <h2>
        Education
      </h2>
      <div className="education">
        <hr/>
        <div className="education-logo">
          <img src={gtLogo} alt="Georgia Tech" />
        </div>
        <div className="education-description">
          <h3> Masters in Computer Science</h3>
        </div>
        <hr/>
        <div className="education-logo"> 
          <img src={clemsonLogo} alt="Clemson" />
        </div>
        <div className="education-description">
          <h3> Bachelors in Mechanical Engineering</h3>
          <h3> Track & Field Student-Athlete</h3>
        </div>
        <hr/>
      </div>
    </EducationContainer>
    {/* <ScrollButton targetId="work">▼ Scroll to Work ▼</ScrollButton> */}
    <WorkContainer id="work">
      <h2>
        Work Experience
      </h2>
      <div className="work">
        <hr/>
        <div className="work-logo">
          <img src={landisLogo} alt="Landis and Gyr" />
        </div>
        <div className="work-description">
          <h3> <i>Implementation Engineer</i> </h3>
          <p className="date"><i>June 2022 - Present</i></p>
          <p>
            Landis+Gyr creates and deploys meter technology allowing utility companies to operate remotely across a mesh network. Within my role, my work has encompassed network and device troubleshooting, process optimization, and strategic data analysis for our project deployments. 
          </p>
        </div>
        <hr/>
        <div className="work-logo"> 
          <img src={fhLogo} alt="Fire and Hammer"/>
        </div>
        <div className="work-description">
          <h3> <i>Web Developer</i> </h3>
          <p className="date"><i>September 2023 - Present</i></p>
          <p> 
            F+H is a company focused on website creation and deployment. My partnership with them began as a mentorship opportunity to strengthen my programming skills within front-end and back-and development.  
          </p>
        </div>
        <hr/>
        <div className="work-logo"> 
          <img src={ametekLogo} alt="Ametek" />
        </div>
        <div className="work-description">
          <h3> <i>Engineering Intern</i> </h3>
          <p className="date"><i>May 2021 - August 2021</i></p>
          <p>
          CSI Heat, the subsidiary to Ametek, provides industrial thermal process solutions. My experience as an intern surrounded designing and modeling configurations, product testing, and creation of technical documentation for target market.
          </p>
        </div>
        <hr/>
      </div>
    </WorkContainer>
    </>
  )
}
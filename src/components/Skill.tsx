import React from 'react';

import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiVite } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgCPlusPlus } from "react-icons/cg";
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";


const Skills = ({skill}) =>{

  const icon = {
    HTML: <FaHtml5/>,
    CSS: <IoLogoCss3/>,
    Javascript: <IoLogoJavascript/>,
    Java: <FaJava/>,
    React: <SiReact/>,
    Python: <FaPython/>,
    Vite: <SiVite/>,
    GitHub: <FaGithub/>,
    Git: <BsGit/>,
    Tailwind: <RiTailwindCssFill/>,
    "C++": <CgCPlusPlus/>,
    Typescript: <SiTypescript/>,
    NodeJs: <FaNode/>
  }

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
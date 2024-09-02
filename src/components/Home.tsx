import { Box } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import Type from './Type.tsx';

import MoodIcon from '@mui/icons-material/Mood';
import PhoneIcon from '@mui/icons-material/Phone';

import Tilt from "react-parallax-tilt";
import downloadCV from '../assets/user-dowload/CV2024.pdf'
import Avatar from '../assets/avatar/avatarIA.jpg';

const Header = () => {
  return (
    <div>      
      <div className='HomePage'> 
        <div className='HomeText'>
            <h1>!Hola!</h1>
            <h1>
              Soy <b>Facundo Palavecino</b>
            </h1>

            <Type/>
            
            <Link to="/AboutMe">
              <button> 
                About Me
                <MoodIcon/>
              </button>
            </Link> 

            <Link to="/Contact">
              <button>
                Contact 
                <PhoneIcon />
              </button>
            </Link>
        </div>
        <Tilt>
              <img className='Avatar' src={Avatar} alt="avatar" />
        </Tilt>
        
      </div>
      
      <Box sx={{textAlign:'center'}}>
        <button className='buttonHome'>
          <a className='aHome' href={downloadCV} download={downloadCV}>¡Descarga mi CV!</a>
        </button>
      </Box>
    </div>
  );
};

export default Header;
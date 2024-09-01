import React from "react";
import { Box, Typography } from '@mui/material';

import WhatsappIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Contact = () => {
    return (
        <div> 
            <Typography variant="h3" sx={{padding:5, textAlign:'center'}}> <b> ¡Contacta conmigo!</b></Typography>     
                <div  style={{display:'flex',
                    justifyContent:'center'}}>
                <Box sx={{
                    textAlign:'center',
                    '& > :not(style)': {
                        m:2,
                        width: 145,
                        height: 145,
                    },
                }}>
                    <div className="contactBox">
                        <a style={{color:'green', textDecoration:'none'}} href="https://wa.me/541155720727">
                        WhatsApp <WhatsappIcon sx={{ fontSize: '6rem' }}/>
                        </a>
                    </div>
                    <br />
                    <div className="contactBox">
                        <a style={{color:'gray', textDecoration:'none'}} href="mailTo:palavecinofacundo.e@outlook.com" target="_blank">
                        Email <EmailIcon sx={{ fontSize: '6rem' }}/>    
                        </a>   
                    </div>
                    <br />
                    <div className="contactBox">
                        <a style={{color:'red', textDecoration:'none'}} href="https://www.instagram.com/ffacupalavecino/" target="_blank">
                        Instagram <InstagramIcon sx={{ fontSize: '6rem' }}/>
                        </a>
                    </div>
                    <br />
                    <div className="contactBox">
                        <a style={{color:'blue', textDecoration:'none'}} href="https://www.linkedin.com/in/palavecinofacundo-e/" target="_blank">
                        LinkedIn <LinkedInIcon sx={{ fontSize: '6rem' }}/>
                        </a>
                    </div>
                </Box>
                </div>  
                <br />             
                <div style={{textAlign:'center'}}>
                        <button className="buttonGit"> Visita mi perfil de GitHub
                            <a style={{color:'black'}} href="https://github.com/Facundopalavecino" target="_blank" >
                                <GitHubIcon sx={{fontSize:'2.1rem'}} />
                            </a>
                        </button>
                </div>                       
        </div>
    );
};

export default Contact;
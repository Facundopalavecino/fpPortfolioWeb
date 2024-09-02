import React from "react";
import { Box, Typography } from '@mui/material';

import WhatsappIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
    return (
        <div style={{paddingTop:'5rem'}}> 
            <Typography variant="h5" sx={{textAlign:'center',paddingBottom:'1.5rem'}}> 
                <b> ¡Contacta conmigo!</b>
                </Typography>     
                <div  style={{display:'flex',
                    justifyContent:'center'}}>
                <Box>
                    <div className="contactBox">
                        <a style={{color:'green', textDecoration:'none'}} href="https://wa.me/541155720727">
                        <WhatsappIcon sx={{ fontSize: '3rem' }}/>
                        </a>
                    </div>
                    <br />
                    <div className="contactBox">
                        <a style={{color:'gray', textDecoration:'none'}} href="mailTo:palavecinofacundo.e@outlook.com" target="_blank">
                        <EmailIcon sx={{ fontSize: '3rem' }}/>    
                        </a>   
                    </div>
                    <br />
                    <div className="contactBox">
                        <a style={{color:'red', textDecoration:'none'}} href="https://www.instagram.com/ffacupalavecino/" target="_blank">
                        <InstagramIcon sx={{ fontSize: '3rem' }}/>
                        </a>
                    </div>
                    <br />
                    <div className="contactBox">
                        <a style={{color:'blue', textDecoration:'none'}} href="https://www.linkedin.com/in/palavecinofacundo-e/" target="_blank">
                        <LinkedInIcon sx={{ fontSize: '3rem' }}/>
                        </a>
                    </div>
                </Box>
                </div>  
                <br />             
                <div style={{textAlign:'center'}}>
                        <b>Perfil de GitHub</b>
                        <button className="buttonGit">
                            <a style={{color:'black'}} href="https://github.com/Facundopalavecino" target="_blank" >
                                <GitHubIcon sx={{fontSize:'2.1rem'}} />
                            </a>
                        </button>
                </div>                       
        </div>
    );
};

export default Contact;
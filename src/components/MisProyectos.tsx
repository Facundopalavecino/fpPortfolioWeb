import React from 'react';
import { Card, Typography, CardContent, CardMedia } from '@mui/material';

import gitHub3 from '../assets/image-proyect/gitHub3.png';
import gitHub2 from '../assets/image-proyect/gitHub2.png';
import weatherApp from '../assets/image-proyect/wheaterapp.png';
import mikasa1 from '../assets/image-proyect/mikasa1.png';
import veganVird1 from '../assets/image-proyect/veganVird1.png';
import allJowey from '../assets/image-proyect/allJowey-COLLAGE.jpg';

const MisProyectos = () => {
    return (
        
        <div style={{textAlign:'center',
            display:'flex',
            justifyContent:'center',
            paddingTop:'5rem'
        }}>
            <div className='cardsProyects' style={{border:'none'}}>
                <h3 style={{paddingBottom:'3rem',paddingTop:'2rem'}} >Mis principales <b>proyectos</b></h3>
                <Card className='proyectsBox'>
                    <CardMedia 
                        component="img"
                        height="200"
                        image={gitHub2}
                        alt='gitHub2'
                        />
                    <CardMedia 
                        component="img"
                        height="200"
                        image={gitHub3}
                        alt='gitHub3'
                        />
                    <CardContent>
                        <Typography  variant="h5" component="div" >
                            GihHub Search
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        He creado una aplicación donde los usuarios pueden escribir el nombre de un usuario de GitHub y obtener información sobre su perfil.
                        Herramientas: React - Axios: Para hacer solicitudes a la API de GitHub
                        API de GitHub para obtener los datos del perfil de los usuarios.
                        Este proyecto demuestra cómo se pueden utilizar tecnologías modernas como React y Axios para construir aplicaciones interactivas que consumen datos de APIs externas.
                        </Typography>
                    </CardContent>
                </Card>
                <br />
                <Card className='proyectsBox'>
                    <CardMedia 
                        component="img"
                        height="400"
                        image={weatherApp}
                        alt='weatherApp'
                        />
                    <CardContent>
                        <Typography  variant="h5" component="div" >
                            Wheather App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        He creado una aplicación donde los usuarios pueden escribir el nombre de una ciudad o país y obtener información sobre el clima actual en ese lugar.
                        Herramientas : React - Axios para hacer solicitudes a la API de clima - API de OpenWeatherMap
                        </Typography>
                    </CardContent>
                </Card>
                <br />
                <Card className='proyectsBox'>
                    <CardMedia 
                        component="img"
                        height="200"
                        image={mikasa1}
                        alt='mikasa1'
                        />
                    <CardMedia
                        component="img"
                        height="200"
                        image={veganVird1}
                        alt='mikasa2'
                        />
                    <CardContent>
                        <Typography  variant="h5" component="div" >
                            "Attack of Titan" y "Vegan Vird" 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Juegos interactivos y bien estructurados desarollados en JAVA. Este proyecto hace un uso extensivo de la POO para organizar el código en clases y objetos.
                            Proporcionando una experiencia de usuario atractiva y funcional.

                        </Typography>
                    </CardContent>
                </Card>
                <br />
                <Card className='proyectsBox'>
                    <CardMedia
                        component="img"
                        height="400"
                        image={allJowey}
                        alt='allJowey'
                        />
                    <CardContent>
                        <Typography  variant="h5" component="div" >
                            "All Jowey"
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        He creado una página web de tipo e-commerce que permite a los usuarios explorar una variedad de joyas y agregar o eliminar productos de su carrito de compras. 
                        Este proyecto utiliza tecnologías web estándar como HTML5, CSS3 y JavaScript para ofrecer una experiencia de usuario interactiva y atractiva.
                        <i> -- Este proyecto es solo una simulacion</i>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default MisProyectos;

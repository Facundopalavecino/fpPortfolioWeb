import React from "react";
import Skills from "./Skill.tsx";
import Certificate from '../assets/certificate/certificate.png';

const AboutMe = () => {
    return(
       <div className="AboutPage">        
        <div className="AboutText">
            <h1 style={{textAlign:'center'}} className="AboutTextHeading">
                ¡Bienvenido a mi <b>portfolio</b>!
            </h1>
            <p>Soy Facundo Palavecino, estudiante de Sistemas con sólida formación en desarrollo web y experiencia construyendo aplicaciones modernas. Me especializo en el consumo y creación de API / APIs REST utilizando TypeScript, Express.js y Axios, conectando frontend y backend de forma eficiente.
He desarrollado proyectos fullstack donde implementé controladores, rutas, validaciones y despliegues en Render y Vercel, resolviendo desafíos como CORS y manejo de estados en React. Me apasiona construir soluciones prácticas con tecnologías modernas y seguir aprendiendo cada día.
Estoy convencido de que mis habilidades, combinadas con mi entusiasmo y dedicación, me permitirán contribuir significativamente en cualquier equipo de desarrollo. Estoy ansioso por tener la oportunidad de demostrar mis capacidades y seguir creciendo profesionalmente en el mundo del desarrollo de software.
            </p>
            
            <div className="skills">
                <Skills skill="Javascript"/>
                <Skills skill="React"/>
                <Skills skill="Typescript"/>    
                <Skills skill="Java"/>
                <Skills skill="NodeJs"/>
                <Skills skill="Python"/>
                <Skills skill="HTML"/>
                <Skills skill="CSS"/>
                <Skills skill="C++"/>     
                <Skills skill="Vite"/>
                <Skills skill="GitHub"/>
                <Skills skill="Git"/>
            </div>       
        </div>       
       </div> 
    );
}

export default AboutMe;

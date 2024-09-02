import React from "react";
import Skills from "./Skill.tsx";

const AboutMe = () => {
    return(
       <div className="AboutPage">        
        <div className="AboutText">
            <h1 style={{textAlign:'center'}} className="AboutTextHeading">
                ¡Bienvenido a mi <b>portfolio</b>!
            </h1>
            <p>
Hola, mi nombre es <b>Facundo Palavecino</b> y soy un apasionado estudiante universitario en Licenciatura en Sistemas, además, con un título terciario en Desarrollo Web obtenido en CODERHOUSE (<a href="https://www.coderhouse.com/ar/certificados/63441ba7bd84fc000e17c61b?lang=" target="_blank" >Ver certificado</a>). A lo largo de mi formación, he desarrollado varios proyectos personales utilizando tecnologías como HTML, CSS, JavaScript, React y Typescript. Estos proyectos me han permitido aplicar y consolidar mis conocimientos en diseño y desarrollo web, creando soluciones funcionales.
Aunque aún no cuento con experiencia profesional en la industria del desarrollo de software, tengo una gran motivación y muchas ganas de demostrar mi talento y habilidades en este campo. He adquirido conocimientos y herramientas adicionales más allá de lo aprendido en la universidad. Me esfuerzo constantemente por mejorar y aprender nuevas tecnologías que puedan enriquecer mis proyectos.
Además, tengo experiencia en el uso de control de versiones con Git, una herramienta esencial para cualquier desarrollador moderno. Git me ha permitido gestionar mis proyectos de manera eficiente, colaborando en equipo y manteniendo un historial claro y organizado de mis desarrollos.
Estoy convencido de que mis habilidades, combinadas con mi entusiasmo y dedicación, me permitirán contribuir significativamente en cualquier equipo de desarrollo. Estoy ansioso por tener la oportunidad de demostrar mis capacidades y seguir creciendo profesionalmente en el mundo del desarrollo de software.

            </p>
            <h1 className="SkillsHeading">Skills set</h1>
            <div className="skills">
                <Skills skill="HTML"/>
                <Skills skill="CSS"/>
                <Skills skill="Bootstrap"/>
                <Skills skill="Javascript"/>
                <Skills skill="React"/>
                <Skills skill="Typescript"/>    
                <Skills skill="Java"/>
                <Skills skill="Python"/>
                <Skills skill="C++"/>     
                <Skills skill="GitHub"/>
                <Skills skill="Git"/>
            </div>       
        </div>       
       </div> 
    );
}

export default AboutMe;

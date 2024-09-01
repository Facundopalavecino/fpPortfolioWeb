import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Routes, Route, useLocation } from 'react-router-dom';
import CircleLoader from "react-spinners/CircleLoader";

import Home from './components/Home.tsx';
import MisProyectos from './components/MisProyectos.tsx';
import Contact from './components/Contact.tsx';
import AboutMe from './components/AboutMe.tsx';
//import MoveToTop from './components/MoveToTop.tsx';
import Nav from './components/NavBar.tsx';
import './index.css';

export default function App(){
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <CircleLoader
            color={"#011c38"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Nav />        

          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/AboutMe" element={<AboutMe />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/MisProyectos" element={<MisProyectos/>} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </>
      )}
    </div>
  );
}
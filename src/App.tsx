import React, { useEffect, useState, Suspense, lazy } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Routes, Route, useLocation } from 'react-router-dom';
import CircleLoader from "react-spinners/CircleLoader";
import Nav from './components/NavBar.tsx';
import './index.css';

// Lazy load components
const Home = lazy(() => import('./components/Home.tsx'));
const MisProyectos = lazy(() => import('./components/MisProyectos.tsx'));
const Contact = lazy(() => import('./components/Contact.tsx'));
const AboutMe = lazy(() => import('./components/AboutMe.tsx'));

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Reduce el tiempo de carga si es posible

    return () => clearTimeout(timer); // Limpia el temporizador
  }, [location]); // Cambiar el estado 'loading' cada vez que cambie la ruta

  return (
    <div>
      {loading ? (
        <div className="loader">
          <CircleLoader
            color={"#011c38"}
            loading={true}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Nav />        

          <Suspense fallback={
            <div className="loader">
              <CircleLoader color={"#011c38"} size={100} />
            </div>
          }>
            {/* Add exit to properly unmount components */}
            <TransitionGroup component={null}>
              <CSSTransition key={location.key} classNames="fade" timeout={500} exit={true}>
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/AboutMe" element={<AboutMe />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/MisProyectos" element={<MisProyectos/>} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          </Suspense>
        </>
      )}
    </div>
  );
}

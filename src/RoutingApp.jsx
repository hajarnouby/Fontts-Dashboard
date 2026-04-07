import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Error from './pages/error';
import Home from './pages/homepage';
import Preloader from './Components/Preloader';

const RouteContent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <>
            <Preloader isLoading={isLoading} />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};

const Routeapp = () => {
    return ( 
        <BrowserRouter>
            <RouteContent />
        </BrowserRouter>
     );
}
 
export default Routeapp;
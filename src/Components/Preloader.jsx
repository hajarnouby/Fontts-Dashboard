import React from 'react';
import './Preloader.css';

const Preloader = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <div className="preloader-overlay">
            <div className="preloader-container">
                <div className="loader"></div>
                <p className="loader-text">Loading...</p>
            </div>
        </div>
    );
};

export default Preloader;

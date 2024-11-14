import React from 'react';
import musicplayer from './images/music player mockup.png';
import exotics from './images/exotics mockup.png';
import sneakers from './images/sneakers.png';
import movieshub from './images/movieshub.png'
import todaysnews from './images/todays news mockup.png'
import './index.css';

const Project = () => {
    return (
        <>

        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Projects</h1>
                </div>
            </div>
        </div>
            <div className="container projects">
                <div className="row">
                    <div className="col-md-6 mt-5 project-container">
                        <div className="project">
                            <img src={musicplayer} alt="music player" className="img-fluid" />
                            <div className="overlay">
                                <span className="project-name">Music Player</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 project-container">
                        <div className="project">
                            <img src={todaysnews} alt="exotics" className="img-fluid" />
                            <div className="overlay">
                                <span className="project-name">Todays News </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 project-container">
                        <div className="project">
                            <img src={movieshub} alt="sneakers" className="img-fluid" />
                            <div className="overlay">
                                <span className="project-name">Movieshub</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;

import React from 'react';
import { NavLink } from 'react-router-dom';
import pdf from './resume.pdf'

import './index.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg p-3 px-5">
            <div className="container-fluid">
                <NavLink className="navbar-brand px-5" to="/" style={{ fontSize: "50px", fontWeight: "bold" }}>
                    shahrukh
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto px-5" style={{ fontWeight: 'light' }}>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? 'medium' : 'normal',
                                })}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/about"
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? 'medium' : 'normal',
                                })}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/project"
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? 'medium' : 'normal',
                                })}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <a
                                className="nav-link resume"
                                href={pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

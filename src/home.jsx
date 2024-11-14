import React from 'react'
import Navbar from './navbar'
import logo_image from './images/logo-image.png'
import './index.css'
import physics_image from './images/physics.png'
import html from './images/html-5.png'
import css from './images/css-3.png'
import javascript from './images/js.png'
import nodejs from './images/nodejs.png'
import bootstrap from './images/bootstrap.png'
import instagram from './images/instagram.svg'
import linkedin from './images/linkedin-alt.svg'
import mongodb from './images/mongodb.webp';

const Home = () => {
    return (
        <>

            {/* main-container */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-5 main-para">
                        <p>Passionate web developer and <b>MERN stack</b> enthusiast, dedicated to crafting innovative, user-focused
                            experiences with the latest in <b>web technology.</b></p>
                    </div>
                    <div className="col-md-6  main-image d-flex justify-content-center align-items-center">
                        <img src={logo_image} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>

            {/* down arrow  */}

            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5 p-5">
                        <div class="down-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" class="arrow" data-name="Layer 1" viewBox="0 0 24 24" width="512"
                                height="512">
                                <path
                                    d="M12,19c-.4,0-.777-.156-1.061-.439l-5.281-5.281,.707-.707,5.281,5.281c.189,.188,.518,.188,.707,0l5.281-5.281,.707,.707-5.281,5.281c-.283,.283-.66,.439-1.061,.439Zm.471-7.195l5.871-5.871-.707-.707-5.635,5.635L6.365,5.227l-.707,.707,5.871,5.871c.13,.13,.3,.195,.471,.195s.341-.065,.471-.195Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* skills section  */}

            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <h1>Technical Skills</h1>
                    </div>
                </div>
                <div className="col-md-12 mt-5 d-flex justify-content-center align-items-center">
                    <div className="skills-grid d-flex flex-wrap justify-content-center skill-section" style={{ gap: 100 }}>
                        <div className="skill-item text-center">
                            <img src={html} alt="HTML" className="skill-icon" height={100} />
                            <p>HTML</p>
                        </div>
                        <div className="skill-item text-center">
                            <img src={css} alt="CSS" className="skill-icon" height={100} />
                            <p>CSS</p>
                        </div>
                        <div className="skill-item text-center">
                            <img src={javascript} alt="JavaScript" className="skill-icon" height={100} />
                            <p>JavaScript</p>
                        </div>
                        <div className="skill-item text-center">
                            <img src={physics_image} alt="React" className="skill-icon" height={100} />
                            <p>React</p>
                        </div>
                        <div className="skill-item text-center">
                            <img src={nodejs} alt="Node.js" className="skill-icon" height={100} />
                            <p>Node.js</p>
                        </div>
                        <div className="skill-item text-center">
                            <img src={bootstrap} alt="Bootstrap" className="skill-icon" height={100} />
                            <p>Bootstrap</p>
                        </div>
                        <div className="skill-item text-center">
                            <img src={mongodb} alt="Mongodb" className="skill-icon" height={100} />
                            <p>Mongodb</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact form  */}

            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5 p-5 text-center conversation">
                        <h3 className="">Interested In Collaborating With Me?</h3>
                        <p className=' mt-3'>I'm Always Ready To Work</p>
                        <button className='btn button btn-primary mt-3' style={{ borderRadius: 30, width: 200, height: 50, backgroundColor: '#F9F7F5', color: "rgb(118,189,216)", fontWeight: 'bold' }}>Mail Me </button>
                    </div>
                </div>
            </div>

            {/* copyright section  */}

            <div className="container text-center mt-3 ">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <p style={{fontSize:15}}>Designed by Shahrukh in 2024. </p>
                        <div className="images d-flex justify-content-center align-items-center mx-4" style={{marginBottom:20}}>
                            <img src={instagram} alt="" height={30} />
                            <img src={linkedin} alt="" height={30} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

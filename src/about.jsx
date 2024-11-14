import React, { useState } from 'react';
import profile_photo from './images/profile.webp';
import './index.css';
import emailjs from 'emailjs-com';

const About = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const saveForm = (e) => {
        e.preventDefault();

        const templatesinfo = {
            from_name: name,
            from_email: email,
            message: message
        };

        emailjs.send(
            'service_p22sn5t',
            'template_tvpql4w',
            templatesinfo,
            'q-U6l4fxKyvJ4-yMc'
        )
            .then(() => {
                alert('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending message:', error);
                alert('Failed to send message.');
            });
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center mt-5 p-5">
                        <h1>HELLO I'M SHAHRUKH Nagnur</h1>
                        <p>I'm a passionate web developer with a strong focus on the MERN stack (MongoDB, Express, React, and Node.js), continuously striving to build efficient, innovative, and user-centric digital experiences. My journey in web development is driven by a commitment to staying at the forefront of web technologies, ensuring that every project I work on is not only functional but also highly intuitive. Whether it's creating responsive interfaces or managing dynamic back-end systems, my goal is to bridge the gap between user needs and technology, delivering solutions that enhance the user experience.</p>
                    </div>
                    <div className="col-md-6 profile d-flex justify-content-center align-items-center p-3">
                        <img src={profile_photo} alt="Profile" height={500} />
                    </div>
                </div>
            </div>

            {/* Contact form */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Let's Connect</h3>
                        <p>Say hello at <mark>shahrukhnagnur2535@gmail.com</mark></p>
                    </div>
                    <div className="col-md-6 form">
                        <form onSubmit={saveForm}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                className="form-control"
                                value={message}
                                placeholder="Enter your message for me"
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;

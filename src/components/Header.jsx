import React, { Fragment } from 'react'
import './Header.css'
import { RiGithubFill, RiLeafFill, RiLinkedinBoxFill } from 'react-icons/ri'
import { motion, useScroll, useSpring } from "framer-motion"
import 'animate.css';
export default function Header() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress)
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg p-3 header fixed-top fixed" style={{ backgroundColor: '#252425' }}>
                <motion.div style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 4,
                    background: 'yellow',
                    transformOrigin: '0%'
                }}>

                </motion.div>
                <div className="container ">
                    <a className="navbar-brand mx-md-5 judul-header animate__animated animate__fadeIn " href="/" >
                        Rois.Dev
                    </a>
                    <button
                        className="navbar-toggler text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul className="navbar-nav text-white mx-auto mb-2 mb-lg-0 gap-2 mx-5">
                            <li className="nav-item animate__animated animate__fadeIn ">
                                <a className="nav-link active fw-bold fs-3" style={{ color: '#FFFF00' }} aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item animate__animated animate__fadeIn ">
                                <a className="nav-link active fw-bold fs-3" aria-current="page" href="#about">
                                    About
                                </a>
                            </li>

                            <li className="nav-item animate__animated animate__fadeIn ">
                                <a className="nav-link active fw-bold fs-3" aria-current="page" href="#project">
                                    Projects
                                </a>
                            </li>

                            <li className="nav-item animate__animated animate__fadeIn ">
                                <a className="nav-link active fw-bold fs-3" aria-current="page" href="#education">
                                    Education
                                </a>
                            </li>


                            <li className="nav-item animate__animated animate__fadeIn ">
                                <a className="nav-link active fw-bold fs-3" aria-current="page" href="#experience">
                                    Experience
                                </a>
                            </li>


                            <li className="nav-item animate__animated animate__fadeIn ">
                                <a className="nav-link active fw-bold fs-3" aria-current="page" href="#skill">
                                    Skills
                                </a>
                            </li>


                            <li className="nav-item animate__animated animate__fadeIn ">
                                <a className="nav-link active fw-bold fs-3" aria-current="page" href="#contact">
                                    Contact
                                </a>
                            </li>



                        </ul>
                        <div className='d-flex gap-3 icon-header'>
                            <li className="nav-item text-end d-flex align-items-center">
                                <a className='nav-link active text-white ' href="https://github.com/roismohammed" >
                                    <RiLinkedinBoxFill className='icon-github ' />
                                </a>
                            </li>
                            <li className="nav-item text-end d-flex align-items-center">
                                <a className='nav-link active text-white ' href="https://www.linkedin.com/in/mohammed-rois-8a4a74283/" >
                                    <RiGithubFill className='icon-github ' />
                                </a>
                            </li>

                        </div>

                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

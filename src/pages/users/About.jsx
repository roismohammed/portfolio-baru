import React from 'react'
import Guest from '../../layouts/Guest'
import './About.css'
import { RiAccountPinCircleFill } from "react-icons/ri"
import Button from '../../components/Button'
// import Button from './components/Button';
export default function About() {
    return (
        <Guest>
            <div id="about" style={{ backgroundColor: '#302E30', minHeight: '100vh' }}>
                <div className="container ">
                    <div className="row mx-5 ">
                        <div className="text-white judul-about ">
                            <p className='text-center' data-aos="flip-down" data-aos-duration="1200">
                                <RiAccountPinCircleFill className='icon-about' />  About
                                <span className='text-about'> Me!</span></p>
                        </div>

                        <div className="col-md-4 text-center mt-3 " data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
                            <img src="img/roisDev.png" className='img' />
                        </div>

                        <div className="col-md-7 text-white mt-3" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
                            <h1 className='fs-1 mt-3 '>Front-end Developer</h1>
                            <p className='fs-2 isi-about'>
                                Halo, nama saya Muhammad Rois. Saya seorang Junior Front-End Programmer dengan keahlian dalam pengembangan menggunakan bahasa pemrograman seperti JavaScript, Bootstrap, dan ReactJS. Saya juga memiliki pengalaman dalam merancang dan mengimplementasikan basis data, serta mengintegrasikan sistem dengan layanan pihak ketiga seperti API dan platform lainnya.
                            </p>



                            <Button text='Read more' />
                        </div>

                    </div>
                </div>
            </div>
        </Guest>
    )
}

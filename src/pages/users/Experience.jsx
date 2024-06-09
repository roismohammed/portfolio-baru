import React from 'react'
import Guest from '../../layouts/Guest'
import '../css/Experience.css'
import { RiBriefcaseFill } from 'react-icons/ri'

export default function Experience() {
    return (
        <Guest>
            <div id="experience" style={{ backgroundColor: '#2B2A2B', minHeight: '100vh' }}>
                <div className="container ">
                    <div className="row d-flex justify-content-center ">
                        <p className="judul-expe text-center text-white "data-aos="fade-up" data-aos-duration="1200">
                            <RiBriefcaseFill className='icon-education' />Experi
                            <span className='text-education'>ence</span>
                        </p>
                        <div className="col-md-8"  data-aos="fade-down"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
                            <div className="card p-2">
                                <div className="card-img">
                                    <img src="img/imgExperience/ss-foote.png" alt="" />
                                </div>
                                <div className="card-text mt-2">
                                    Saya memiliki pengalaman sebagai front-end web developer lepas di mana saya mengembangkan aplikasi presentasi berbasis video. Dalam proyek ini, saya bertanggung jawab untuk membangun antarmuka pengguna yang responsif dan menarik, menggunakan berbagai teknologi web seperti HTML, CSS, dan JavaScript. Saya juga berkolaborasi dengan tim untuk mengimplementasikan fitur-fitur spesifik yang diperlukan, termasuk integrasi dengan platform penyedia layanan video conference. Proyek ini memungkinkan saya untuk memperluas pemahaman saya tentang pengembangan web dan menantang kemampuan saya dalam membangun pengalaman pengguna yang intuitif dan efektif."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    )
}

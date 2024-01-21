import React from 'react'
import Guest from '../../layouts/Guest'
import './Project.css'
import { RiComputerFill } from 'react-icons/ri'
import Button from '../../components/Button'
export default function Project() {
    return (
        <Guest>
            <div id='project' style={{ backgroundColor: '#2B2A2B', minHeight: '100vh' }}>
                <div className="container">
                    <div className="row mx-5 ">
                        <div className="text-white text-center judul-project">
                            <p data-aos="fade-up" data-aos-duration="1200"><RiComputerFill className='icon-project' /> Latest <span className='text-about'>Project</span></p>
                        </div>
                        <div className="col-md-4 " data-aos="fade-down"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
                            <div className="text-white" >
                                <div className="card card-project text-white p-2 border mt-2"  >
                                    <img src="img/imgProject/notes.png" className="card-img-top" alt="..." />
                                    {/* cardbody */}
                                    <div>
                                        <h1 className="card-title mt-2">Notes</h1>
                                        <p className="card-text">
                                            Aplikasi ini dibangun dengan menggunakan teknologi React dan Bootstrap, yang terkait dengan operasi CRUD (Create, Read, Update, Delete), serta melakukan pengambilan data dari API dan interaksi dengan database.
                                        </p>
                                        <a href="https://rois-notes.netlify.app/">
                                            <Button text={'Read More'} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 " data-aos="fade-down"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
                            <div className="text-white" >
                                <div className="card card-project text-white p-2 border mt-2" >
                                    <img src="img/imgProject/company.png" className="card-img-top" alt="..." />
                                    {/* cardbody */}
                                    <div>
                                        <p className="card-title mt-2">Company Profil</p>
                                        <p className="card-text">
                                            Aplikasi ini dibangun dengan menggunakan teknologi React dan Bootstrap, yang terkait dengan Profil perusahaan
                                        </p>
                                        <a href="https://companyprofil-pttusuksate.netlify.app/">
                                            <Button text={'Read More'} />
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mt-2" data-aos="fade-down"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="1200">                            <div className="text-white" >
                                <div className="card card-project text-white p-2 border">
                                    <img src="img/imgProject/quran.png" className="card-img-top" alt="..." />
                                    {/* cardbody */}
                                    <div>
                                        <p className="card-title mt-2">Al-Quran</p>
                                        <p className="card-text">
                                            Aplikasi ini dibangun dengan menggunakan teknologi React dan Bootstrap, yang terkait dengan operasi CRUD (Create, Read, Update, Delete), serta melakukan pengambilan data dari API dan interaksi dengan database.
                                        </p>
                                        <a href="https://alkitab.netlify.app/">
                                            <Button text={'Read More'} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    )
}

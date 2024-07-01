import React from 'react'
import Guest from '../../layouts/Guest'
import '../css/Project.css'
import { RiComputerFill } from 'react-icons/ri'
import Button from '../../components/Button'
import Card from '../../components/Card'
export default function Project() {
    return (
        <Guest>
            <div id='project' style={{ backgroundColor: '#2B2A2B', minHeight: '100vh' }}>
                <div className="container">
                    <div className="row mx-5 ">
                        <div className="text-white text-center judul-project">
                            <p data-aos="fade-up" data-aos-duration="1200"><RiComputerFill className='icon-project' /> Latest <span className='text-about'>Project</span></p>
                        </div>
                        <div className="col-md-4 "
                            data-aos="fade-down"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration="1200">
                            <Card href={'https://rois-notes.netlify.app/'}
                                gambar={'img/imgProject/notes.png'}
                                judul={'Notes'}
                                deskripsi={'"Aplikasi ini dibangun dengan menggunakan teknologi React dan Bootstrap, yang terkait dengan operasi CRUD (Create, Read, Update, Delete), serta melakukan pengambilan data dari API dan interaksi dengan database."'} />
                        </div>

                        <div className="col-md-4 " data-aos="fade-down"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
                            <Card gambar={'img/imgProject/company.png'} judul={'Company-Profil'} deskripsi={'"Aplikasi ini dibangun menggunakan teknologi React dan Bootstrap, dengan fokus pada pengembangan antarmuka pengguna (UI) terkait dengan profil perusahaan."'} />
                        </div>

                        <div className="col-md-4 " data-aos="fade-down"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
                            <Card gambar={'img/imgProject/quran.png'} judul={'Al-Quran'} deskripsi={'plikasi ini dibangun dengan menggunakan teknologi React dan Bootstrap, yang terkait dengan operasi CRUD (Create, Read, Update, Delete), serta melakukan pengambilan data dari API dan interaksi dengan database.'} />
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    )
}

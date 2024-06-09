import React from 'react'
import Guest from '../../layouts/Guest'
import '../css/Skill.css'
import { RiVipCrownFill } from 'react-icons/ri'
import Card from '../../components/CardSkill'
export default function Skill() {
    return (
        <Guest>
            <div id='skill' style={{ backgroundColor: '#2B2A2B', minHeight: '100vh' }}>
                <div className="container">
                    <div className="row d-flex justify-content-center ">
                        <div className='text-center text-white' data-aos="fade-down">
                            <p className='judul-skil '> <RiVipCrownFill className='icon-skil' />Specialed <span className='text-skil'>Skills</span></p>
                        </div>

                        <div className='col-6 col-md-2  mt-3' data-aos="flip-down" data-aos-duration="1000"
                            data-aos-anchor-placement="center-bottom" >
                            <Card judul={'HTML'} img={'img/imgSkil/html.png'} />
                        </div>

                        <div className='col-6 col-md-2 mt-3'  data-aos="flip-down" data-aos-duration="1000"
                            data-aos-anchor-placement="center-bottom" >
                            <Card judul={'CSS'} img={'img/imgSkil/css.png'} />
                        </div>

                        <div className='col-6 col-md-2 mt-3' data-aos="flip-down" data-aos-duration="1000"
                            data-aos-anchor-placement="center-bottom" >
                            <Card judul={'React.js'} img={'img/imgSkil/js.png'} />
                        </div>

                        <div className='col-6 col-md-2 mt-3' data-aos="flip-down" data-aos-duration="1000"
                            data-aos-anchor-placement="center-bottom" >
                            <Card judul={'Next.js'} img={'img/imgSkil/nextjs.png'} />
                        </div>

                    </div>

                    <div className="row mt-5 justify-content-center">
                        <div className='col-6 col-md-2 mt-3' data-aos="flip-up" data-aos-duration="1000"
                            data-aos-anchor-placement="center-bottom" >
                            <Card judul={'React.js'} img={'img/imgSkil/reactjs.png'} />
                        </div>

                        <div className='col-6 col-md-2 mt-3 'data-aos="flip-up" data-aos-duration="1000"
                            data-aos-anchor-placement="center-bottom"  >
                            <Card judul={'Bootstrap'} img={'img/imgSkil/bootstrap.png'} />
                        </div>

                        <div className='col-6 col-md-2 mt-3 'data-aos="flip-up" data-aos-duration="1000"
                            data-aos-anchor-placement="center-bottom"  >
                            <Card judul={'Talwinds.css'} img={'img/imgSkil/talwinds.png'} />
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    )
}

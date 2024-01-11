import React from 'react'
import Guest from '../../layouts/Guest'
import './Education.css'
import { RiBriefcaseFill } from 'react-icons/ri'
import Timeline from '../../components/Timeline'
export default function Education() {
    return (
        <Guest>
            <div id='education' style={{ backgroundColor: '#302E30', minHeight: '100vh' }}>
                <div className="container">
                    <div className="row">
                        <div className="text-white">
                            <p className="judul-education text-center" data-aos="flip-down">
                                <RiBriefcaseFill className='icon-education' />Educa<span className='text-education'>tion</span>
                            </p>
                            <Timeline/>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    )
}

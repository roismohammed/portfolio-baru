import React, { Fragment } from 'react'
import Guest from '../layouts/Guest'
import './CardSkill.css'
export default function CardSkill({ judul, img, cardText, button }) {
    return (
        <Fragment>
            <div className="container">
                <div className='card bg-card-skil'>
                    <img src={img} className='img-skil' alt="" />
                    <div className='text-white text-center mt-2'>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

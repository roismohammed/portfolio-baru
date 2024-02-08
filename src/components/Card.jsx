import React, { Fragment } from 'react'
import Button from './Button'

export default function Card({ judul, deskripsi ,gambar}) {
    return (
        <Fragment>
            <div className="text-white" >
                <div className="card card-project text-white p-2 border mt-2" >
                    <img src={gambar} className="card-img-top" alt="..." />
                    {/* cardbody */}
                    <div>
                        <p className="card-title mt-2">{judul}</p>
                        <p className="card-text">
                            {deskripsi}
                        </p>

                    </div>
                    <div className=''>
                        <a className='' href="https://companyprofil-pttusuksate.netlify.app/">
                            <Button text={'Read More'} />
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

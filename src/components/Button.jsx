import React, { Fragment } from 'react'
import './Button.css'
export default function Button({ text }) {
    return (
        <Fragment>
            <div className=" pt-3 mt-3">
                <button className="tombol ">
                    <span className='text-tombol'>
                        {text}
                    </span>
                </button>
            </div>
        </Fragment>
    )
}

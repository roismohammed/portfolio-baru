import React, { Fragment } from 'react'
import './ButtonGlow.css'
export default function ButtonGlow({nama}) {
    return (
        <Fragment>
            <div >
                <div class="button_slide slide_right"> {nama} </div>
            </div>
        </Fragment>
    )
}

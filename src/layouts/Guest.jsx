import React, { Fragment } from 'react'
import Header from '../components/Header'

export default function Guest({ children }) {
    return (
        <Fragment>
            <Header/>
            <main>
                {children}
            </main>
        </Fragment>
    )
}

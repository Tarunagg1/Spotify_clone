import React, { Fragment } from 'react'
import './index.css';
import Body from '../Body'
import Footer from '../Footer'
import Sidebar from '../Sidebar'

export default function Player({ spotify }) {
    return (
        <Fragment>
            <div className="player">
                <div className="player__body">
                    <Sidebar />
                    {/* sidebar */}
                    <Body spotify={spotify} />
                    {/* body */}
                </div>
                <Footer />
                {/* footer */}
            </div>
        </Fragment>
    )
}

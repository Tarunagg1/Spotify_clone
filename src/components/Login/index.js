import React, { Component, Fragment } from 'react'
import { accessUrl } from '../../config/spotifyConfig';
import './index.css';

export default class Login extends Component {
    render() {
        return (
            <Fragment>
                <div className="login">
                    <img
                        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                        alt=""
                    />
                    <a href={accessUrl}>LOGIN TO SPOTIFY</a>
                </div>
            </Fragment>
        )
    }
}

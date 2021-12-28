import React, { Fragment, useEffect } from 'react'
import Login from './components/Login'
import { getTokenFromResponse } from './config/spotifyConfig'
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useDataLayerValue } from './Store/DataLayer';

const spotify = new SpotifyWebApi();

export default function App() {
    const [{ token }, dispatch] = useDataLayerValue();


    useEffect(() => {
        const Hash = getTokenFromResponse();
        window.location.hash = "";
        const _token = Hash.access_token;

        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                payload: _token
            })

            spotify.setAccessToken(_token);

            spotify.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    payload: user,
                });
            });

            spotify.getUserPlaylists()
                .then((playList) => {
                    dispatch({
                        type: "SET_PLAYLIST",
                        payload: playList
                    })
                })
                .catch((err) => {
                    console.log(err);
                    alert("Error in app js getUserPlaylists")
                })

            spotify.getPlaylist('37i9dQZEVXcJZyENOWUFo7')
                .then((playList) => {
                    dispatch({
                        type: "SET_DISCOVER_WEEKLY",
                        payload: playList
                    })
                })
                .catch((err) => {
                    console.log(err);
                    alert("Error in app js")
                })
        }
    }, [token, dispatch]);

    return (
        <Fragment>
            {
                token ? <Player spotify={spotify} /> : <Login />
            }
        </Fragment>
    )
}

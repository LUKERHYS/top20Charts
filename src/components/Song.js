import React from 'react';

const Song = (props) => {
    const items = props.songs.map(song => {
        return <li> {song["entry"]["im:name"]["label"]}</li>
        })


    return (
        <>
        { items }
        </>
    )
    }

export default Song;
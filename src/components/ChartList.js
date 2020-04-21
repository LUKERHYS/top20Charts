import React from 'react';
import Song from './Song';

const ChartList = (props) => {
    
    return (
        <ul>
            <h2>I am the chart List</h2>
            <Song songs={props.songs}/>
        </ul>
    )

}

export default ChartList;
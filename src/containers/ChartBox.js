import React, { Component } from 'react';
import ChartList from '../components/ChartList'

class ChartBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
        fetch(url)
        .then(res => res.json())
        .then(songs => this.setState({
            songs
        }))
    }

    render(){
        return (
            <div>
                 <h1>I am the chart container</h1>
                 <ChartList 
                    songs={this.state.songs}
                 />
            </div>
           
        )
    }
}

export default ChartBox;
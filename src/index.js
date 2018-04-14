//go find react library from node_modules and assign it with React variable
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';// ./ means current dir
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyDsrakeHLHfeYBQLC_uKUZ01Ae0BIEof-g';



class  App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>{
            this.setState({ videos});
        });
        
        
    }


    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
};


//take this component's generated HTML and show on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
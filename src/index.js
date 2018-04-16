//go find react library from node_modules and assign it with React variable
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';// ./ means current dir
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_details'
import _ from 'lodash'
const API_KEY = 'AIzaSyDsrakeHLHfeYBQLC_uKUZ01Ae0BIEof-g';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('kpop')
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term)},500);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
                    videos={this.state.videos} />

            </div>
        )
    }
};


//take this component's generated HTML and show on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
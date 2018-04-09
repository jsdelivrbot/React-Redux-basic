//go find react library from node_modules and assign it with React variable
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';// ./ means current dir

const API_KEY = 'AIzaSyDsrakeHLHfeYBQLC_uKUZ01Ae0BIEof-g';

//make component
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    )
};


//take this component's generated HTML and show on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
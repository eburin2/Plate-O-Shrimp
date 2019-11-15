import React from 'react';
import SongList from './SongList';
import './App.css';
import Shrimp from './Shrimp';


const App = () => {
  return (
      <div className="ui container grid">
        <header className="flex">
          <h1 className="font">PLATE-O-SHRIMP</h1>
        </header>
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide">
            <Shrimp />s
          </div>
        </div>
      </div>
  );
}

export default App;

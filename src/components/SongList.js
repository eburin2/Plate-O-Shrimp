import React from 'react';
import { connect } from 'react-redux';
import './SongList.css';
import { selectedSong } from '../actions';

const getRandom = (arr, n) => {
    let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

class SongList extends React.Component {
  renderList() {
    const songs = getRandom(this.props.songs, 1);
    return songs.map((song) => {
      return(
        <div id="top" className="item" key={song.title}>
          <div className="content">
            <h2>Artist: {song.artist}</h2>
            <h2 className='content-padding'>Song: {song.title}</h2>
            <h2 className='content-padding'>Album: {song.album}</h2>
            <h2 className='content-padding'>Year: {song.year}</h2>
          </div>
          <div>
            <img className='album-img' alt={song.title} src={song.img} />
          </div>
          <audio autoPlay>
            <source src={song.mp3} type="audio/mp3" />
          </audio>
          <div className="center floated content">
            <button
              id="select"
              className="ui button primary select"
              onClick={() => this.props.selectedSong(song)}
              >
              Play a Random Song
            </button>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui list">{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps,
  //passing in action creator to the connect function
  { selectedSong }
)(SongList);

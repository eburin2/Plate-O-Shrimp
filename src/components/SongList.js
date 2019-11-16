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
            <h2><span className="bold">Artist:</span><span className="content-style">{song.artist}</span></h2>
            <h2><span className="bold">Song:</span><span className='content-style'>{song.title}</span></h2>
            <h2><span className="bold">Album:</span><span className='content-style'>{song.album}</span></h2>
            <h2><span className="bold">Year:</span><span className="content-style">{song.year}</span></h2>
          </div>
          <div>
            <img className='album-img content-style' alt={song.title} src={song.img} />
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
              Next Song
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

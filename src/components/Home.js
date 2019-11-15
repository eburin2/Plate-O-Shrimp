import React from 'react';
import { connect } from 'react-redux';
import { selectedNewSong } from '../actions';


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


class Home extends React.Component {
  renderList() {
    const songs = getRandom(this.props.songs, 1);
    return songs.map((song) => {
      return(
        <div>
          <button
            id="select"
            className="ui button primary select"
            onClick={() => this.props.selectedNewSong(song)}
            >
            Play a Random Song
          </button>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps,
  //passing in action creator to the connect function
  { selectedNewSong }
)(Home);

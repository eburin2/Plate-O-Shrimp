import React from 'react';
import { connect } from 'react-redux';
import './Shrimp.css';

const shrimp = ({ song }) => {
  return(
      <div>
         <h1>Shrimp</h1>
      </div>
  );
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(shrimp);

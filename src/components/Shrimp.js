import React from 'react';
import { connect } from 'react-redux';
import './Shrimp.css';

const shrimp = () => {
  return(
     <div>
      <h1 id="title">SHRIMP</h1>
     </div>
  );
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(shrimp);

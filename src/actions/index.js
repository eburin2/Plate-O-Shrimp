// Action creator
export const selectedNewSong = (song) => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

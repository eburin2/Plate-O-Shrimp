import { combineReducers } from 'redux';
import JeanLouisBucchi from '../assets/the-visitor.mp3';
import BernardEstardy from '../assets/tic-tac-nocturne.mp3';
import TotoBlanke from '../assets/ppg.mp3';
import BirthControl from '../assets/film-of-life.flac';
import Oho from '../assets/cragwheel.mp3';
import FrankZappa from '../assets/stick-it-out.mp3';
import PinoDonaggio from '../assets/telescope.mp3';
import DonRobertson from '../assets/clouds.mp3';
import ComputerSex from '../assets/in-the-city-of-the-7th-sun.mp3';
import AnthonyMore from '../assets/judy-get-down.mp3';
import ELO from '../assets/the-whale.mp3';
import PeterHammill from '../assets/accidents.mp3';
import DenisWize from '../assets/andro.mp3';



const songsReducer = () => {
  return [
    { artist: 'Jean Louis Bucchi', title: 'The Visitor', duration: '4:05', mp3: JeanLouisBucchi, year: '1983', album: 'Blue Prism - Space & Communication', img: 'https://img.discogs.com/g42pg_31r5RqMcJXqky8mMn5iuw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-978214-1425738778-5901.jpeg.jpg'},
    { artist: 'Bernard Estardy', title: 'Tic Tac Nocturne', duration: '4:05', mp3: BernardEstardy, year: '1975', album: 'Electro Sounds Vol. 2', img: 'https://img.discogs.com/mNtf1phKS9S00_gZW1NYurOFQLY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-865629-1166988452.jpeg.jpg'},
    { artist: 'Toto Blanke', title: 'PPG', duration: '4:05', mp3: TotoBlanke, year: '1976', album: 'Electric Circus', img: 'https://img.discogs.com/pF3jwGXmKVj0lW4U3D5lr8LblZc=/fit-in/600x583/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2576396-1341516810-9527.jpeg.jpg'},
    { artist: 'Birth Control', title: 'Film of Life', duration: '4:05', mp3: BirthControl, year: '1976', album: 'Backdoor Possibilities', img: 'https://img.discogs.com/_52DG4fD4U1nxYG55SdxRkeef38=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-830799-1393007967-8953.jpeg.jpg'},
    { artist: 'OHO', title: 'Cragwheel the Corpse pt.ii', duration: '4:05', mp3: Oho, year: '1974', album: 'Okinawa', img: 'https://img.discogs.com/cDzkziVGDM9Zy-IEIzWrPBsCkD4=/fit-in/400x394/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3557051-1335162932.jpeg.jpg'},
    { artist: 'Frank Zappa', title: 'Stick It Out', duration: '4:05', mp3: FrankZappa, year: '1979', album: "Joe's Garage", img: 'https://img.discogs.com/SCXGhsc6JoLReHOtuoQmTmAHxu8=/fit-in/600x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-682927-1406986065-8295.jpeg.jpg'},
    { artist: 'Pino Donnagio', title: 'Telescope', duration: '4:05', mp3: PinoDonaggio, year: '1984', album: "Body Double OST", img: 'https://img.discogs.com/f-XqBwLf6HBwSX_JBy0JrCfAgJk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2246544-1345806832-8705.jpeg.jpg'},
    { artist: 'Don Robertson', title: 'Clouds', duration: '4:05', mp3: DonRobertson, year: '1984', album: "Spring", img: 'https://img.discogs.com/U9B1wdo2LnvoX0RWyF0Zn_hbqGg=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6209086-1417984662-2529.jpeg.jpg'},
    { artist: 'Computer Sex', title: 'In the City of the 7th Sun', duration: '4:05', mp3: ComputerSex, year: '1982', album: "Body Electric", img: 'https://img.discogs.com/INGVaNMWs8DVlnCvVSswbHBb6sk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4022105-1352677372-8094.jpeg.jpg'},
    { artist: 'Anthony More', title: 'Judy Get Down', duration: '4:05', mp3: AnthonyMore, year: '1979', album: "Flying Doesn't Help", img: 'https://img.discogs.com/PJqsSj6-NO_S1w_vSbm0oU1saO8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-625854-1409746827-5601.jpeg.jpg'},
    { artist: 'Electric Light Orchestra', title: 'The Whale', duration: '4:05', mp3: ELO, year: '1977', album: "Out of the Blue", img: 'https://img.discogs.com/k-Hxg-9_DbHelalxxampl1-naqE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-342681-1356796270-8952.jpeg.jpg'},
    { artist: 'Peter Hammill', title: 'Accidents', duration: '4:05', mp3: PeterHammill, year: '1982', album: "Enter K", img: 'https://img.discogs.com/mfmn3HBX9sM2K2w1XWAID3aEo9E=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1374902-1466619986-1514.jpeg.jpg'},
    { artist: 'Denis Wize', title: 'Andro', duration: '4:05', mp3: DenisWize, year: '2018', album: "Wize Music", img: 'https://img.discogs.com/M0tBCGgeHauJpFNBs2T0sLcWmS8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12923557-1544618140-7192.jpeg.jpg'}
  ];
};

const selectedSongReducer = (selectedNewSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedNewSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedNewSong: selectedSongReducer
});

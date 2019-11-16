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
import Ditto from '../assets/rock.mp3';
import RancidPoultry from '../assets/the-smoking-crack.mp3';
import TerjeRypdal from '../assets/the-hunt.flac';
import Konrad from '../assets/music-scientist.mp3';
import DeAngelis from '../assets/i-want-to-win.mp3';
import HiddenCombo from '../assets/music-from-a-sophomore.mp3';
import Wazmo from '../assets/on-right.mp3';
import Mooseheart from '../assets/aliens-from-space.mp3'
import Captain from '../assets/im-a-spider.mp3'
import Munju from '../assets/hollywood.mp3'
import ManillaRoad from '../assets/necropolis.flac'
import MickFarren from '../assets/drunk-in-the-morning.mp3'
import Besombes from '../assets/sleeping.mp3'
import Grosskopf from '../assets/emphasis.mp3'



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
    { artist: 'Denis Wize', title: 'Andro', duration: '4:05', mp3: DenisWize, year: '2018', album: "Wize Music", img: 'https://img.discogs.com/M0tBCGgeHauJpFNBs2T0sLcWmS8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12923557-1544618140-7192.jpeg.jpg'},
    { artist: 'Charles Ditto', title: 'Rock', duration: '4:05', mp3: Ditto, year: '1987', album: "In Human Terms", img: 'https://img.discogs.com/FVH4YwRIhoFjy_k8AzbGxp3pzsk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1248194-1545224722-9314.jpeg.jpg'},
    { artist: 'Rancid Poultry', title: 'The Smoking Crack', duration: '4:05', mp3: RancidPoultry, year: '1990', album: "Hello There! I'm a Balloon Rabbit", img: 'https://img.discogs.com/88n_s-y_w3xqyaFCTVskjs0AZLk=/fit-in/376x579/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3499876-1492062241-7238.jpeg.jpg'},
    { artist: 'Terje Rypdal', title: 'The Hunt', duration: '4:05', mp3: TerjeRypdal, year: '1974', album: "Whenever I Seem To Be Far Away", img: 'https://img.discogs.com/-GBeE1V8sM-JnhafN_hA_6B_QHo=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1030869-1303515333.jpeg.jpg'},
    { artist: 'Konrad', title: 'Music Scientist', duration: '4:05', mp3: Konrad, year: '1982', album: "Evil", img: 'https://img.discogs.com/MSqXYV0oV0DEKDUlFaOPwRSTuNM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2735738-1306078352.jpeg.jpg'},
    { artist: 'Guido and Maurizio De Angelis', title: 'I Want To Win', duration: '4:05', mp3: DeAngelis, year: '1978', album: "Formula Uno", img: 'https://img.discogs.com/jdM38QOFTR6MYqzmuk0u4boVMss=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2346156-1515785600-7106.jpeg.jpg'},
    { artist: 'Hidden Combo', title: 'Music for a Sophomore', duration: '4:05', mp3: HiddenCombo, year: '1981', album: "King of Siam / Music for a Sophomore", img: 'https://img.discogs.com/Bw9PpVTQ88oaYUFF7VmOYPoX13I=/fit-in/445x364/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1790991-1243540677.jpeg.jpg'},
    { artist: 'Wazmo Nariz', title: 'On Right', duration: '4:05', mp3: Wazmo, year: '1981', album: "Tell Me How To Live", img: 'https://img.discogs.com/jOs2njleceH1EPFeKCh-0Uz897c=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2274824-1273822353.jpeg.jpg'},
    { artist: 'Mooseheart Faith', title: 'Aliens From Space', duration: '4:05', mp3: Mooseheart, year: '1988', album: "Mooseheart Faith", img: 'https://img.discogs.com/_2jM-Kj11LeaOrerxafUKVwZhns=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3385497-1356203200-5557.jpeg.jpg'},
    { artist: 'Captain Sensible', title: "I'm a Spider", duration: '4:05', mp3: Captain, year: '1983', album: "The Power of Love", img: 'https://img.discogs.com/AtoySKbLrHuCm1oVJqa1Gr2ARGo=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1458786-1380927982-1231.jpeg.jpg'},
    { artist: 'Munju', title: "Hollywood", duration: '4:05', mp3: Munju, year: '1984', album: "Le Perfectionniste", img: 'https://img.discogs.com/-T5q81PY8SrVmHXhAP7TlJOGYx0=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1531945-1226503101.jpeg.jpg'},
    { artist: 'Manilla Road', title: "Necropolis", duration: '4:05', mp3: ManillaRoad, year: '1983', album: "Crystal Logic", img: 'https://img.discogs.com/rh8AgZy5HcatpG0OuheVeDdTJXw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1706396-1428355684-6129.jpeg.jpg'},
    { artist: 'Mick Farren', title: "Drunk in the Morning", duration: '4:05', mp3: MickFarren, year: '1978', album: "Vampires Stole My Lunch Money", img: 'https://img.discogs.com/Iqddw9iWD3INlsDy4l7nQjsgP5M=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1893528-1250690218.jpeg.jpg'},
    { artist: 'Philippe Besombes', title: "Sleeping Pour Le Zoo", duration: '4:05', mp3: Besombes, year: '1982', album: "La Guerre Des Animaux Animals War", img: 'https://img.discogs.com/hctQ0VntYFewZd07-WAybq43T7Q=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-560021-1262979358.jpeg.jpg'},
    { artist: 'Harald Grosskopf', title: "Emphasis", duration: '4:05', mp3: Grosskopf, year: '1980', album: "Synthesist", img: 'https://img.discogs.com/ipBuKUDr5Lve-I_3w-mSk0d46S4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8444965-1461752348-8811.mpo.jpg'}
    ];
  };

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

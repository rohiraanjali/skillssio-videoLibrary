
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {Routes , Route} from "react-router-dom";
import HistoryVideos from './components/History';
import VideoPlayer from "./components/React-Player";
import LikedVideos from "./components/LikedVideos";
import WatchLater from "./components/WatchLater"
import Playlist from './components/Playlist';
import SearchPage from './components/SearchPage';
import LoginForm from './Auth/LoginForm';
import RegistrationForm from "./Auth/RegistrationForm"
import PrivateRoute from "./utils/PrivateRoute";
import History from "./components/History"
import {useAuth} from "./contexts/AuthContext"
import axios from 'axios';
import {useEffect} from "react"
import {useVideo} from "./contexts/VideoContext"

function App() {
  const {isUserLoggedIn,uid} = useAuth();
  const {dispatch} = useVideo();
  console.log(uid)

  useEffect(() => {
    (async function() {
      const {data} = await axios.get("http://localhost:5000/videos")
      dispatch({type: "UPDATE_VIDEOS", payload: {data}})
      console.log(data)
    }) ()
  }, [])

  useEffect(() => {
    if(uid === undefined) return
    (async function() {
      const {data} = await axios.post(`http://localhost:5000/users/${uid}`)
      dispatch({type: "ADD_TO_HISTORY", payload: {data}})
      dispatch({type: "ADD_TO_LIKED_VIDEOS", payload: {data}})
      dispatch({type: "ADD_TO_LATER_VIDEOS", payload: {data}})
      dispatch({type: "ADD_TO_PLAYLISTS", payload: {data}})
      console.log(data)
    }) ()
  }, [uid])
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}>
       {!isUserLoggedIn && <Route path="/login" element={<LoginForm/>} />}
       {!isUserLoggedIn && <Route path="/register" element={<RegistrationForm/>} />}
      </Route>
      <Route path="/video/:videoId" element={<VideoPlayer />} />
      <Route path="/history" element={<HistoryVideos />} />
      <Route path="/likedVideos" element={<LikedVideos />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/watchLaterVideos" element={<WatchLater />} />
      <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;

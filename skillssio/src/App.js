
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import {Routes , Route} from "react-router-dom";
import HistoryVideos from './Pages/History/History';
import VideoPlayer from "./Pages/VideoPlayer/React-Player";
import LikedVideos from "./Pages/LikedVideos/LikedVideos";
import WatchLater from "./Pages/WatchLater/WatchLater"
import Playlist from './Pages/Playlist/Playlists';
import SearchPage from './Pages/Search/SearchPage';
import LoginForm from './Auth/LoginForm';
import RegistrationForm from "./Auth/RegistrationForm"
import PrivateRoute from "./utils/PrivateRoute";
import {useAuth} from "./contexts/AuthContext"
import axios from 'axios';
import {useEffect} from "react"
import {useVideo} from "./contexts/VideoContext"

function App() {
  const {isUserLoggedIn,uid} = useAuth();
  const {dispatch} = useVideo();

  useEffect(() => {
    (async function() {
      const {data} = await axios.get("https://skillssio-backend-deploy.herokuapp.com/videos")
      dispatch({type: "UPDATE_VIDEOS", payload: {data:data.videos}})
      console.log(data)
    }) ()
  }, [])
  


  useEffect(() => {
    if(uid === undefined) return
    (async function() {
      const {data} = await axios.get(`https://skillssio-backend-deploy.herokuapp.com/users/${uid}`)
      console.log(data)
      dispatch({type: "UPDATE_DATA", payload: {data}})
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
      <PrivateRoute path="/history" element={<HistoryVideos />} />
      <PrivateRoute path="/likedVideos" element={<LikedVideos />} />
      <PrivateRoute path="/playlists" element={<Playlist />} />
      <PrivateRoute path="/watchLaterVideos" element={<WatchLater />} />
      <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
  
}

export default App;
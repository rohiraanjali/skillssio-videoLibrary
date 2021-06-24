
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

function App() {
  const {isUserLoggedIn} = useAuth();

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
      <PrivateRoute path="/history" element={<History/>}/>

      </Routes>
    </div>
  );
}

export default App;

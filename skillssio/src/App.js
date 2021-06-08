
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {Routes , Route} from "react-router-dom";
import HistoryVideos from './components/History';
import VideoPlayer from "./components/React-Player";
import LikedVideos from "./components/LikedVideos";
import WatchLater from "./components/WatchLater"
import Playlist from './components/Playlist';
function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/video/:videoId" element={<VideoPlayer />} />
       <Route path="/history" element={<HistoryVideos />} />
       <Route path="/likedVideos" element={<LikedVideos />} />
       <Route path="/playlist" element={<Playlist />} />
       <Route path="/watchLaterVideos" element={<WatchLater />} />
      
       </Routes>
    </div>
  );
}

export default App;

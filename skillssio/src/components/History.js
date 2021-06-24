
import "./Home.css"
import React ,{useEffect} from "react";
import { NavLink , Link} from "react-router-dom";
import { useVideo } from "../contexts/VideoContext";
import {allVideos} from "../Database/allVideos";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
const HistoryVideos = () => {
  
  useEffect( () => {
    window.scroll({
      behavior:"smooth",
      top:0
    })
},[])

  const {
    state: { historyVideos }
  } = useVideo();

  console.log(historyVideos);
  const getFilteredVideos = (historyVideos) => {
    return historyVideos.filter((item) => item.existsInHistory);
  };

  const filteredHistoryVideos = getFilteredVideos(historyVideos);
  
    return (
<div className="main_wrapper">
<Sidebar />
      
     <div className="home-wrapper__main">   
     <Navbar />
      {historyVideos.length === 0 ? (
        <h1 className="empty-state">No videos seen yet!</h1>)
        : (<h3 className="discover_home">Watch History</h3>)
      }
      <div className= "videos-list-showcase-1 designVideoList">
        {filteredHistoryVideos.map((item) => {
          return (
            <Link to={`/video/${item.id}`} className="video-item-link pointer">
              <div
                className="video-item"
                key={item.id}
              >
                <img
                  style={{ width: "250px" }}
                  className="thumbnail-img"
                  src={item.thumbnail}
                  alt="thumbnail"
                />
                <div className="video-description">
                    <img className="avatar-img" src={item.avatar} alt="avatar"/>
                  <h4 className="video-title">{item.videoTitle}</h4>
                  <p className="small-description">{item.channelName}</p>
                  <p className="small-level">Level: {item.level}</p>
                </div>
              </div>
            </Link>
          );
        })}
        
      </div>
      <h3 className="discover_home">Discover More</h3>
      <main
        className="videos-list-showcase designVideoList"
      >
        {allVideos.map((item) => {
          return (
            <Link to={`/video/${item.id}`} className="video-item-link pointer">
              <div
                className="video-item"
                key={item.id}
              >
                <img
                  style={{ width: "250px" }}
                  className="thumbnail-img"
                  src={item.thumbnail}
                  alt="thumbnail"
                />
                <div className="video-description">
                    <img className="avatar-img" src={item.avatar} alt="avatar"/>
                  <h4 className="video-title">{item.videoTitle}</h4>
                  <p className="small-description">{item.channelName}</p>
                  <p className="small-level">Level: {item.level}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </main>
     </div>
    </div>
    )
}

export default HistoryVideos;

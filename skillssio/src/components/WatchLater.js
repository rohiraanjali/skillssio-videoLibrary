
import "../App.css"
import React from "react";
import { NavLink , Link} from "react-router-dom";
import { useVideo } from "../contexts/VideoContext";
import {allVideos} from "../Database/allVideos";
import Sidebar from "./sidebar";
const WatchLater = () => {
  const {
    state: { laterVideos }
  } = useVideo();

  console.log(laterVideos);
  const getFilteredVideos = (laterVideos) => {
    return laterVideos.filter((item) => item.existsInLaterVideos);
  };

  const filteredLaterVideos = getFilteredVideos(laterVideos);
  
    return (
<div className="main_wrapper">
<Sidebar />
      
     <div className="home-wrapper__main">   
       <main className="home-wrapper__main">
      {laterVideos.length === 0 ? (
        <h1 className="empty-state">No videos seen yet!</h1>)
        : (<h3 className="discover_home">Watch History</h3>)
      }
      <div className= "videos-list-showcase designVideoList">
        {filteredLaterVideos.map((item) => {
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
      </main>
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

export default WatchLater;

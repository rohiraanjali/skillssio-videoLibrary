import React from "react";
import {Link} from "react-router-dom";
import {useVideo} from "../contexts/VideoContext";
import Sidebar from "./sidebar";
import {allVideos} from "../Database/allVideos";
const Playlist = () => {
    const {
        state: { playlists }
    } = useVideo();

    return (
        <>
        <div className="main_wrapper">
<Sidebar />
      
     <div className="home-wrapper__main">   
       <main className="home-wrapper__main">
      {playlists.length === 0 ? (
        <h1 className="empty-state">No playlist added yet!</h1>)
        : (<h3 className="discover_home">My Playlists</h3>)
      }
      <div className="playlist-wrapper" >
      {playlists.map((playlist) => {
          <h1 className="playListName">{playlist.listName}</h1>
          return (
      <div>
      
      <div className= "videos-list-showcase designVideoList">
        {playlist.listVideos.map((item) => {
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
      </div>
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
        </>
    )
}

export default Playlist
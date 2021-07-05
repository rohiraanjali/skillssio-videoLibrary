
import "./Home.css"
import React ,{useEffect} from "react";
import { NavLink , Link} from "react-router-dom";
import { useVideo } from "../contexts/VideoContext";
import {videos} from "../Database/allVideos";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
const LikedVideos = () => {
  
  useEffect( () => {
    window.scroll({
      behavior:"smooth",
      top:0
    })
},[])

const {
          state: { likedVideos }
        } = useVideo();
      
        console.log(likedVideos);
        const getFilteredVideos = (likedVideos) => {
          return likedVideos.filter((item) => item.existsInLikedVideos);
        };
        const filteredLikedVideos = getFilteredVideos(likedVideos);
  
    return (
<div className="main_wrapper">
<Sidebar />
      
     <div className="home-wrapper__main">   
     <Navbar />
     {likedVideos.length === 0 ? (
        <h1 className="empty-state">No Videos Liked yet!</h1>)
        : (<h3 className="discover_home">Liked Videos</h3>)
      }
      <div className= "filteredLikedVideos">
      {filteredLikedVideos.map((item) => {
          return (
            <Link to={`/video/${item.id}`} className="video-item-link pointer">
              <div
                className="video-item"
                key={item.id}
              >
                <img
                  style={{ width: "280px" }}
                  className="thumbnail-img"
                  src={item.thumbnail}
                  alt="thumbnail"
                />
                <div className="video-description">
                    <img className="avatar-img" src={item.avatar} alt="avatar"/>
                  <h4 className="video-title">{item.videoTitle}</h4>
                  <span>
                  <i style={{color: "red", float: "right", padding: "10px", backgroundColor: "hsl(0deg 0% 20%)", borderRadius: "100%"}} className="far fa-trash-alt"></i>
                  </span>
                  <p className="small-description">{item.channelName}</p>
                  <p className="small-level">Level: {item.level}</p>
                </div>
              </div>
            </Link>
          );
        })}
        
      </div>
      <br />
      <br />
      <h3 className="discover_more">Discover More</h3>
      <main
        className="videos-list-showcase-1 designVideoList"
      >
        {videos.map((item) => {
          return (
            <Link to={`/video/${item.id}`} className="video-item-link pointer">
              <div
                className="video-item"
                key={item.id}
              >
                <img
                  style={{ width: "280px" }}
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

export default LikedVideos;


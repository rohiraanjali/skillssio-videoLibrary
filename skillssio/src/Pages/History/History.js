
import "../../components/Home.css"
import React ,{useEffect} from "react";
import { NavLink , Link} from "react-router-dom";
import { useVideo } from "../../contexts/VideoContext";
import {videos} from "../../Database/allVideos";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/Navbar";
const HistoryVideos = () => {
  
  useEffect( () => {
    window.scroll({
      behavior:"smooth",
      top:0
    })
},[])

  const {
    state: { history }
  } = useVideo();

  console.log(history);
  
    return (
<div className="main_wrapper">
<Sidebar />
      
     <div className="home-wrapper__main">   
     <Navbar />
      {history.length === 0 ? (
        <h1 className="empty-state">No videos seen yet!</h1>)
        : (<h3 className="discover_home">Watch History</h3>)
      }
      <div className= "designVideoList">
        {history.map((item) => {
          return (
            <Link to={`/video/${item._id}`} className="video-item-link pointer">
              <div
                className="video-item"
                key={item._id}
              >
                <img
                  style={{ width: "100%" }}
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
    </div>
    </div>
    )
}

export default HistoryVideos;

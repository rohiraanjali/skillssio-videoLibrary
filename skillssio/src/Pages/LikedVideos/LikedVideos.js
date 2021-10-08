import "../../components/Home.css"
import React ,{useEffect} from "react";
import { NavLink , Link} from "react-router-dom";
import { useVideo } from "../../contexts/VideoContext";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/Navbar";
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
      
    return (
<div className="main_wrapper">
<Sidebar />  
    <div className="home-wrapper__main">   
    <Navbar />
    {likedVideos.length === 0 ? (
        <h1 className="empty-state">No Videos Liked yet!</h1>)
        : (<h3 className="discover_home">Liked Videos</h3>)
      }
      <div className= "designVideoList">
      {likedVideos.map((item) => {
          return (
            <Link to={`/video/${item.id}`} className="video-item-link pointer">
              <div
                className="video-item"
                key={item.id}
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

export default LikedVideos;


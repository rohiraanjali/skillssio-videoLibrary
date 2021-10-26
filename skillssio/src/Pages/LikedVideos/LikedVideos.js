import "../../components/Home.css"
import React ,{useEffect} from "react";
import { NavLink , Link} from "react-router-dom";
import { useVideo } from "../../contexts/VideoContext";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { useParams } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

const LikedVideos = () => {
  
  useEffect( () => {
    window.scroll({
      behavior:"smooth",
      top:0
    })
},[])

const { videoId  } = useParams();
const { uid } = useAuth()
const {
  state: { likedVideos},
  dispatch
} = useVideo();
      
        const removeLikeVideos = async(videoId) => {
          try {
            const {data} =  await axios.delete(`https://skillssio-backend-deploy.herokuapp.com/likedVideos/${uid}/${videoId}`)
            dispatch({ type: "UPDATE_LIKEDVIDEOS", payload: {data:data.likedVideos} })
            console.log("deleted")
          } catch (error) {
            console.log(error);
          }
        }
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
              <div
                className="video-item"
                key={item.id}
              >
              <Link to={`/video/${item.id}`} className="video-item-link pointer">
                <img
                  style={{ width: "100%" }}
                  className="thumbnail-img"
                  src={item.thumbnail}
                  alt="thumbnail"
                />
                </Link>
                <div className="video-description">
                    <img className="avatar-img" src={item.avatar} alt="avatar"/>
                    <span >
                  <i 
                  onClick={() => removeLikeVideos(item._id)}
                  style={{color: "red", float: "right", padding: "10px", backgroundColor: "hsl(0deg 0% 20%)", borderRadius: "100%"}} className="far fa-trash-alt"></i>
                  </span>
                  <h4 className="video-title">{item.videoTitle}</h4>
                  <p className="small-description">{item.channelName}</p>
                  <p className="small-level">Level: {item.level}</p>
                </div>
              </div>
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


import React, { useReducer , useEffect , useState} from "react";
import { reducer, initialState, HANDLE_LIKE, HANDLE_DISLIKE } from "../../components/LikeReducer";
import {useParams} from "react-router-dom";
import PlaylistModal from "../../components/PlaylistModal"
import ReactPlayer from "react-player";
import { useVideo } from "../../contexts/VideoContext";
import { checkingItem } from "../../utils/checkingItem";
import {Link} from "react-router-dom";
import "./React-Player.css";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/sidebar";
import Backdrop from "../../utils/Backdrop/Backdrop";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

  const VideoPlayer = () => {
  const [iconColor , setIconColor] = React.useState("grey")
  const[display , setDisplay] = React.useState("none")

  const { videoId  } = useParams();
  const { uid } = useAuth()
  const {
    state: { history,videos , likedVideos, playlists },
    dispatch
  } = useVideo();
  const [state, likeDispatch ] = useReducer(reducer, initialState);
  const { likes, dislikes, active } = state;
  const videoDetails = videos.find((item) => item._id === videoId)

  const likeVideo = async() => {
    try {
      const {data} =  await axios.post(`http://localhost:5000/likedVideos/${uid}/${videoId}`)
      dispatch({ type: "UPDATE_LIKEDVIDEOS", payload: {data:data.likedVideos} })
    } catch (error) {
      console.log(error);
    }
}
const dispatchHistory = async() => {
    try {
      const {data} =  await axios.post(`http://localhost:5000/history/${uid}/${videoId}`)
      dispatch({ type: "UPDATE_HISTORY", payload: {data:data.history} })
    } catch (error) {
      console.log(error);
    }
}
  return (
    <>
    <div className="main_wrapper_player">
      <Sidebar />
      <div className="home-wrapper__main">
      <Navbar />
      <div className="player-wrapper">
      <div className="player-div"> 
      <ReactPlayer
        className="react-player"
        url={`https://www.youtube.com/watch?${videoDetails?.videoID}`}
        width="100%"
        height="300px"
        controls={true}
        onPlay={dispatchHistory}
      />
      <div className="player-control">
        <div className="video-description">
        <p className="video-DisplayTitle">{videoDetails?.videoTitle}</p>
        <p className="video-views-date">1.4k views •  Nov 20, 2020 {videoDetails?.date}</p>
        </div>
        <div className="video-controls">
        <span className="flex items-center">
        <i 
        style={{ color: active === "like" ? "white" : "grey" }}
        onClick={likeVideo}
      className="fa fa-thumbs-up"></i>
        <p className="like-counter">{likes}</p>
        </span>
        <span className="flex items-center">
        <i style={{ color: active === "dislike" ? "white" : "grey" }}
        onClick={likeVideo}
        className="fa fa-thumbs-down"></i>
        <p className="like-counter">{dislikes}</p>
        </span>
        <span className="flex items-center">
        <svg 
        onClick={() => setDisplay("block")}
        stroke="grey" fill="grey" stroke-width="0" viewBox="0 0 24 24" class="text-2xl" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M2 18h10v2H2v-2zm0-7h20v2H2v-2zm0-7h20v2H2V4zm16 14v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path></g></svg>
        <p className="like-counter">SAVE</p>
        </span>
        </div>
      </div>
      <hr style={{width: "100%" , backgroundColor: "grey" , height: "0" , opacity: "0.2"}}/>
      <div className="playlist" style={{display: display}}>
    <Backdrop show={display}>
      <PlaylistModal 
      setDisplay={setDisplay}
      videoDetails={videoDetails}
      />
      </Backdrop>
      </div>
      </div>
  
      <div className="suggestion-div" style={{color: "white" ,marginBottom: "10px", fontSize: "1rem"}}>
      <span className="badge">All Videos</span>
        <br />
      {videos?.map((item) => {
          return (
            <Link to={`/video/${item._id}`} className="video-item-link pointer">
              <div
                className="video-item-playyerWrapper"
                key={item._id}
              >
                <div className="video-thumbnail-wrapper">
                <img
                  style={{ width: "160px", paddingRight:"10px"  }}
                  className="thumbnail-img-player"
                  src={item?.thumbnail}
                  alt="thumbnail"
                />
                </div>
                <div className="video-description-player">
                  <div className="video-title-player">{item?.videoTitle}</div>
                  <br />
                
                  <small className="small-description-player">{item?.channelName} • {item?.level}</small>
                  <small className="small-description-player">4.5M views • 5 months ago </small>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      </div>
      </div>
      </div>
      <br />

      <br />
      <br />
    
    </>
  );
};

export default VideoPlayer;
import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { reducer, initialState, HANDLE_LIKE, HANDLE_DISLIKE } from "./LikeReducer";
import { NavLink, useParams } from "react-router-dom";
import PlaylistModal from "./PlaylistModal"
import ReactPlayer from "react-player";
import searchIcon from "./search.svg";
import { useVideo } from "../contexts/VideoContext";
import { allVideos } from "../Database/allVideos";
import { checkingItem } from "../utils/checkingItem";
import {Link} from "react-router-dom";
import playerLogo from "./video-logo1.png";

 const VideoPlayer = () => {
  const [iconColor , setIconColor] = React.useState("grey")
  const[display , setDisplay] = React.useState("none")

   const { videoId  } = useParams();
  const {
    state: { historyVideos , likedVideos },
    dispatch
  } = useVideo();
  const videoDetails = allVideos.find((item) => item.id === videoId);
  const [state, likeDispatch ] = useReducer(reducer, initialState);
  const { likes, dislikes, active } = state;
 
const likeVideo = () => {
  if(active !== "like" &&  !checkingItem(likedVideos, videoId) ) {
    likeDispatch({type: HANDLE_LIKE})
    dispatch({ type: "ADD_TO_LIKED_VIDEOS", payload: videoDetails})
  }
  else {
    likeDispatch({type: HANDLE_DISLIKE})
  }
  // active !== "like" ? likeDispatch({ type: HANDLE_LIKE }) : null
}


  return (
    <>
     <div className="player-playlistModal">
     <nav className="nav-wrapper">
        <div className="list-logo-wrapper">
          <NavLink to="/">
          <div className="player-logo-wrapper">
          <img className="player-logo" src={playerLogo} />
          </div>
          </NavLink>
         <div className="search-container-wrapper"> <form className="search-container">
    <input type="text" id="search-bar" placeholder="What can I help you with today?" />
    <a href="#"><img className="search-icon" src={searchIcon}/></a>
  </form></div>
  <div className="user-avatar"><i class="fa fa-user-circle-o" aria-hidden="true"></i></div>
        </div>
      </nav>
    <div className="player-wrapper">
      <div className="player-div"> 
      <ReactPlayer
        className="react-player"
        url={`https://www.youtube.com/watch?${videoId}`}
        width="100%"
        height="350px"
        controls={true}
        onStart={() =>
             !checkingItem(historyVideos, videoId)
            ? dispatch({ type: "ADD_TO_HISTORY", payload: videoDetails })
            : null
        }
      />
      <div className="player-control">
        <div className="video-description">
        <p className="video-DisplayTitle">{videoDetails.videoTitle}</p>
        <p className="video-views-date">1.4k views •  Nov 20, 2020 {videoDetails.date}</p>
        </div>
        <div className="video-controls">
       <span className="flex items-center">
       <i style={{ color: active === "like" ? "white" : "grey" }}
        onClick={likeVideo}
       
      class="fa fa-thumbs-up"></i>
       <p className="like-counter">{likes}</p>
       </span>
       <span className="flex items-center">
       <i style={{ color: active === "dislike" ? "white" : "grey" }}
       onClick={
         likeVideo
          // active !== "dislike" ? likeDispatch({ type: HANDLE_DISLIKE }) : null
        }
       class="fa fa-thumbs-down"></i>
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
      <PlaylistModal 
      display={display}
      setDisplay={setDisplay}
      videoDetails={videoDetails}
      />
      </div>
      </div>
     
      <div className="suggestion-div" style={{color: "white" ,marginBottom: "10px", fontSize: "1rem"}}>
      <span className="badge">All Videos</span>
        <br />
      {allVideos.map((item) => {
          return (
            <Link to={`/video/${item.id}`} className="video-item-link pointer">
              <div
                className="video-item-playyerWrapper"
                key={item.id}
              >
                <div className="video-thumbnail-wrapper">
                <img
                  style={{ width: "160px", paddingRight:"10px"  }}
                  className="thumbnail-img-player"
                  src={item.thumbnail}
                  alt="thumbnail"
                />
                </div>
                <div className="video-description-player">
                  <div className="video-title-player">{item.videoTitle}</div>
                  <br />
                
                  <small className="small-description-player">{item.channelName} • {item.level}</small>
                  <small className="small-description-player">4.5M views • 5 months ago </small>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      </div>
      </div>
      <br />

      {/* <div className="control-handles-player"> */}
        {/* <button
          onClick={() =>
            !checkingItem(likedVideos, videoId)
              ? dispatch({ type: "ADD_TO_LIKED_VIDEOS", payload: videoDetails })
              : null
          }
        >
          Like
        </button>
        <button
          onClick={() =>
            !checkingItem(laterVideos, videoId)
              ? dispatch({ type: "ADD_TO_LATER_VIDEOS", payload: videoDetails })
              : null
          }
        >
          Add to Watch Later
        </button> */}
      {/* </div> */}
      <br />
      <br />
    
    </>
  );
};

export default VideoPlayer;
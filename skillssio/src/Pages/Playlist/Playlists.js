import React from "react";
import {Link} from "react-router-dom";
import {useVideo} from "../../contexts/VideoContext";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/Navbar/Navbar"
import "../../components/Home.css";
import axios from "axios";
import { useParams } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

const Playlist = () => {
    
  const {
    state: { playlists},
    dispatch
  } = useVideo();
  const { videoId  } = useParams();
  const { uid } = useAuth()
  const {playlistId} = useParams();


  // const removeVideoFromPlaylist = async(videoId,playlistId) => {
  //   try {
  //     const {data} =  await axios.delete(`http://localhost:5000/playlists/${uid}/${playlistId}/${videoId}`);
  //     dispatch({ type: "REMOVE_FROM_PLAYLIST", payload: {data:data.playlists} })
  //     console.log("deleted")
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // const removePlaylist = async(playlistId) => {
  //   try {
  //     const {data} =  await axios.delete(`http://localhost:5000/playlists/${uid}/${playlistId}`)
  //     dispatch({ type: "REMOVE_PLAYLIST", payload: {data:data.playlists} })
  //     console.log("deleted")
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
    return (    
        <>
        <div className="main_wrapper_player">
        <Sidebar />
        <div className="home-wrapper__main">   
        <Navbar />
        <main className="home-wrapper__main">
      {playlists.length === 0 ? (
        <h1 className="empty-state">No playlist added yet!</h1>)
        : (<h3 className="discover_home">My Playlists</h3>)
      }
      <div className="playlist-wrapper" >
      {playlists.map((item) => {
          return ( 
      <div key={item._id}>
      <span><h3 className="playListName">{item?.name}</h3>
      </span>

      <div className= "designVideoList">
        { item.videos.length !== 0 ? item.videos.map((item) => {
          return (
            <Link to={`/video/${item?._id}`} className="video-item-link pointer">
              <div
                className="video-item"
                key={item?._id}
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
                  <p className="small-description">{item.channelName}</p>
                  <p className="small-level">Level: {item.level}</p>
                </div>
              </div>
            </Link>
        );
        }) : <div>No videos </div>}
    
      </div>
      </div>
            );
        })}
          </div>
      </main>
    
    </div>
    </div>
        </>
    )
}

export default Playlist
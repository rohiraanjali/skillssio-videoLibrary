import React from "react";
import {useAuth} from "../contexts/AuthContext";
import { useVideo } from "../contexts/VideoContext";
import { useParams } from "react-router";
import axios from "axios"

const PlaylistModal = ({setDisplay , display , videoDetails}) => {
  const [playlistName, setPlaylistName] = React.useState("");

const {videoId} = useParams();
const {
    state: { playlists , videos } , dispatch
  } = useVideo();
  const { uid } = useAuth()
  const video = videos.find(v => v._id === videoId)


const addVideoToPlaylist = async(videoId,playlistId,playlistIndex,toast) => {
  try {
      if( playlists[playlistIndex].videos.find( v => v._id === videoId)) {
          const {status,data} = await axios.delete(`https://skillssio-backend-deploy.herokuapp.com/playlists/${uid}/${playlistId}/${videoId}`);
          // if(status === 200){
          //      dispatch({type:"REMOVE_FROM_PLAYLIST",payload:data.playlists});
          // }
        return;
      };

      const {status,data} = await axios.post(`https://skillssio-backend-deploy.herokuapp.com/playlists/${uid}/${playlistId}/${videoId}`);
      if(status === 200){
        dispatch({ type: "ADD_TO_PLAYLIST", payload: {data:data.playlists} })
        console.log(data)      
          }
  } catch (error) {
      // toast(true);
      setTimeout( () => {
          // toast(false);
      },2000)
  }
  
}

const createPlaylist = async(name) => {
  try {
      const {data} = await axios.post(`https://skillssio-backend-deploy.herokuapp.com/playlists/${uid}`,{name});
      console.log(data)
      dispatch({ type: "CREATE_PLAYLIST", payload: {data:data.playlists} })
  } catch (error) {
      setTimeout(() => {
        console.log("can't create playlist")
      },2000)
  }
}

  const handleSubmit = (e) => {
    e.preventDefault();

    if(playlistName !== "") {
        createPlaylist(playlistName);
        setPlaylistName("");
  
    }
    else{
console.log("error")
    }
}

const dispatchWatchLater = async() => {
  try {
    const {data} =  await axios.post(`https://skillssio-backend-deploy.herokuapp.com/watchLater/${uid}/${videoId}`)
    dispatch({ type: "UPDATE_WATCHLATER", payload: {data:data.watchLater} })
  } catch (error) {
    console.log(error);
  }
}
return (
    <div
      className="playlistModal-wrapper "
      style={{display: display }}
    >
      <div className="playlistModal-header">
        <h2 className="playlistModal-head">SAVE or ADD to Playlist</h2>
        <p className="playlistModal-description">save to watch later or add to a playlist or create a new one</p>
      </div>
      <div className="playlistModal-main">
          <div className="watchLater">
          <input 
          onChange={dispatchWatchLater} 
          className="watchlater-checkbox"
          type="checkbox"
          />
          <label className="watchlaterLabel">watch later</label>
          </div>
          {playlists.map( (list,index) => (
                        <div className="modal__content__item" key={list._id}>
                          <input type="checkbox" defaultChecked={list.videos.find(v => v._id === videoId)} onChange={() => addVideoToPlaylist(video._id,list._id,index)} style={{cursor:"pointer"}}/>
                          <label><small style={{color: "white"}}>{list.name}</small></label>
                        </div>
                        ) )}
        
        <div className="playlistModal-input"
          style={{display: !display}}
        >
          <input
          className="playlistModal-inputBox"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            type="text"
            placeholder="Add new playlist"
          />

          &nbsp;
          <button
            onClick={handleSubmit}
            className="plus-btn"
          >
        <i class="fa fa-plus" aria-hidden="true"></i>
            
          </button>
        
        </div>
        
      </div>
      
      <div className="playlistModal-footer">
        <button
          onClick={() => setDisplay("none")}
          className="close-btn"
          id="closeMe"
        >
          Cancel
        </button>
    &nbsp;
    &nbsp;
    &nbsp;
        <button onClick={() => setDisplay("none")} className="add-btn">
          Add
        </button>
      </div>
    </div>
  );
};

export default PlaylistModal;
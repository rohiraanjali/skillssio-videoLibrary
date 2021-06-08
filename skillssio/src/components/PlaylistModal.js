import React from "react";
import {useVideo} from "../contexts/VideoContext";
import { v4 as uuidv4 } from 'uuid';
import addToPlayListHandler from "../utils/addToPlayListHandler"
import { checkingItem } from "../utils/checkingItem";
import { useParams } from "react-router";

const UserPlaylists = ({videoDetails , playlist}) => {
    const {
        state: { playlists }
        , dispatch
    } = useVideo();
    return (
        <>
        <li>
        <input
          onChange={() =>
            addToPlayListHandler(playlists, dispatch, playlist, videoDetails)
          }
          id={playlist.listId}
          type="checkbox"
        />
      <label style={{color: "black"}} htmlFor={playlist.listId}>{playlist.listName}</label>
      </li>
      </>
    );
  };

const PlaylistModal = ({setDisplay , display , videoDetails}) => {
const [playListName , setPlayListName] = React.useState("");

const {videoId} = useParams();
const {
    state: { playlists , laterVideos } , dispatch
  } = useVideo();

 function createNewPlaylist(playListName) {
    playlists.push({
        listName: playListName,
        listId: uuidv4(),
        listVideos: []
    })
    setPlayListName(" ");
}
return (
    <div
      className="playlistModal-wrapper "
      style={{display: display }}
    >
      <div className="playlistModal-header">
        <h2>SAVE or ADD to Playlist</h2>
        <p>save to watch later or add to a playlist</p>
      </div>
      <div className="playlistModal-main">
          <div className="watchLater">
          <input 
           onChange={() =>
            !checkingItem(laterVideos, videoId)
              ? dispatch({ type: "ADD_TO_LATER_VIDEOS", payload: videoDetails })
              : null
          } 
          className="watchlater-checkbox"
          type="checkbox"
          />
          <label style={{fontSize: "1.2rem" , fontWeight: "550"}}>watch later</label>
          </div>
         
        <ul className="playlist-checkbox">
          {playlists.map((playlist) => {
            return (
              <UserPlaylists
                playlist={playlist}
                videoDetails={videoDetails}
                key={playlist.listId}
              />
            );
          })}
        </ul>
        <div className="playlistModal-input"
          style={{display: !display}}
        >
          <input
          className="playlistModal-inputBox"
            value={playListName}
            onChange={(e) => setPlayListName(e.target.value)}
            type="text"
            placeholder="Add new playlist"
          />

          &nbsp;
          <button
            disabled={playListName === ""}
            onClick={() => createNewPlaylist(playListName)}
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
          Close
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
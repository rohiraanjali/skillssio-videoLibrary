
function checkIfPresentInPlaylist(playlistsArray, playlist, videoDetails) {
    let selectedPlaylist = playlistsArray.find(
      (item) => item.listId === playlist.listId
    );
  
    console.log("logging listVideos array...", selectedPlaylist);
    const videoObject = selectedPlaylist?.listVideos.find(
      (video) => video.id === videoDetails.id
    );
    console.log({ videoObject });
    return videoObject;
  }
  
  function addToPlaylistHandler(playlists, dispatch, playlist, videoDetails) {
    const result = checkIfPresentInPlaylist(playlists, playlist, videoDetails);
    console.log("this is result", result);
    if (!result) {
      dispatch({ type: "ADD_TO_PLAYLISTS", payload: { videoDetails, playlist } });
      // dispatch({type:"ADD_TO_PLAYLISTS",payload:playlist})
    }
  }
  export default addToPlaylistHandler;
  
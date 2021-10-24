import { createContext, useContext, useReducer } from "react";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  
  const VideoReducer = (state, action) => {
    switch (action.type) {
    case "UPDATE_HISTORY":{
      return {...state,history:action.payload.data}
    }
    case "UPDATE_WATCHLATER":{
      return {...state,watchLater:action.payload.data}
    }
    case "UPDATE_LIKEDVIDEOS":{
      return {...state,likedVideos:action.payload.data}
    }
    case "CREATE_PLAYLIST":{
      return {...state,playlists:action.payload.data}
    }
    case "REMOVE_PLAYLIST": {
      return {...state,playlists:action.payload.data};
    }
    case "ADD_TO_PLAYLIST":{
      return {...state,playlists:action.payload.data}
    }
    case "REMOVE_FROM_PLAYLIST": {
      return {...state,playlists:action.payload.data}
    }
    case "UPDATE_DATA":{
      return {...state,...action.payload.data}
    }
    case "UPDATE_VIDEOS": {
      return {...state, videos: action.payload.data}
      }
      default:
        return state;
    }
  };
  const initialState = {
    history: [],
    likedVideos: [],
    playlists: [],
    watchLater: [],
    videos:[]
  }
  const [state, dispatch] = useReducer(VideoReducer, initialState);

  console.log(state)

  return (
    <div>
      <VideoContext.Provider value={{ state, dispatch }}>
        {children}
      </VideoContext.Provider>
    </div>
  );
};

export const useVideo = () => {
  return useContext(VideoContext);
};

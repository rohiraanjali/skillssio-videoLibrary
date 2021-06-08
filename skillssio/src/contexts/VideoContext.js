import { createContext, useContext, useReducer } from "react";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const VideoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_HISTORY": {
        return {
          ...state,
          historyVideos: [
            ...state.historyVideos,
            { ...action.payload, existsInHistory: true }
          ]
        };
      }

      case "ADD_TO_LIKED_VIDEOS": {
        return {
          ...state,
          likedVideos: [
            ...state.likedVideos,
            { ...action.payload, existsInLikedVideos: true }
          ]
        };
      }
      case "ADD_TO_LATER_VIDEOS": {
        return {
          ...state,
          laterVideos: [
            ...state.laterVideos,
            { ...action.payload, existsInLaterVideos: true }
          ]
        };
      }
      case "ADD_TO_PLAYLISTS": {
        console.log("action payload is" , action.payload)
        const result = state.playlists.map((list) => {
          if (list.listId === action.payload.playlist.listId) {
            return {
              ...list,
              listVideos: [
                ...list.listVideos ,
                { ...action.payload.videoDetails }
              ]
            };
          }
          return list;
        });
        return { ...state, playlists: [...result] };
      }
      default:
        return state;
    }
  };

  
  const initialState = {
    historyVideos: [],
    likedVideos: [],
    playlists: [],
    laterVideos: [],
    
  }
  const [state, dispatch] = useReducer(VideoReducer, initialState);
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

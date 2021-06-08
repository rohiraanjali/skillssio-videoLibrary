export const HANDLE_LIKE = Symbol("HANDLE_LIKE");
export const HANDLE_DISLIKE = Symbol("HANDLE_DISLIKE");
export const initialState = {
  likes: 100,
  dislikes: 12,
  active: null
};
export const reducer = (state, action) => {
  const { likes, dislikes, active } = state;

  switch (action.type) {
    case HANDLE_LIKE:
      return {
        ...state,
        likes: state.likes + 1,
        dislikes: active === "dislike" ? dislikes - 1 : dislikes,
        active: "like"
      };
    case HANDLE_DISLIKE:
      return {
        ...state,
        likes: active === "like" ? likes - 1 : likes,
        active: "dislike",
        dislikes: dislikes + 1
      };
    default:
      return state;
  }
};

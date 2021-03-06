const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: `It\'s my first post`, likesCount: 11 }
   ],
   newPostText: 'it-kamasutra'

};


const profileReducer = (state = initialState, action) => {
   if (action.type === ADD_POST) {

      let newPost = {
         id: 3,
         message: state.newPostText,
         likesCount: 0
      };

     return {
         ...state,
         posts: [...state.posts, newPost],
         newPostText: ''
      };  
   }
   else if (action.type === UPDATE_NEW_POST_TEXT) {
      return {
         ...state,
         newPostText: action.newText
      };
   }

   return state;
}

export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
   type: UPDATE_NEW_POST_TEXT,
   newText: text
});
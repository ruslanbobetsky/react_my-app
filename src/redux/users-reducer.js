const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
   users: [
      { id: 1, photoUrl: 'https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg', followed: true, fullname: 'Dimych', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
      { id: 2, photoUrl: 'https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg', followed: true, fullname: 'Ihor', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
      { id: 3, photoUrl: 'https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg', followed: false, fullname: 'Andrii', status: 'I am a boss too', location: { city: 'Kyiv', country: 'Ukraine' } },
      { id: 4, photoUrl: 'https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg', followed: false, fullname: 'Ruslan', status: 'Just user', location: { city: 'Ternopil', country: 'Ukraine' } },
   ],
};


const usersReducer = (state = initialState, action) => {

   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         }

      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         }

      case SET_USERS:
         return {
            ...state,
            users: [...state.users, ...action.users]
         }

      default: return state
   }
}


export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const SetusersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
   users: [
      // { id: 1, photoUrl: 'https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg', followed: true, fullname: 'Dimych', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
      // { id: 2, photoUrl: 'https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg', followed: true, fullname: 'Ihor', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
      // { id: 3, photoUrl: 'https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg', followed: false, fullname: 'Andrii', status: 'I am a boss too', location: { city: 'Kyiv', country: 'Ukraine' } },
      // { id: 4, photoUrl: 'https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg', followed: false, fullname: 'Ruslan', status: 'Just user', location: { city: 'Ternopil', country: 'Ukraine' } },
   ],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1

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
         return { ...state, users: action.users }

      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         }

      case SET_TOTAL_USERS_COUNTE:
         return {
            ...state,
            totalUsersCount: action.totalUsersCount
         }

      default: return state
   }
}


export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setusersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currnetPage) => ({ type: SET_CURRENT_PAGE, currnetPage });
export const setUsersTotalCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

export default usersReducer;
import React from 'react'
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setusersAC, setUsersTotalCountAC, unfollowAC } from '../../redux/users-reducer';
import Users from './UsersC';

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,

   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      },
      setUser: (users) => {
         dispatch(setusersAC(users))
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setUsersTotalCountAC(totalCount))
      },
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

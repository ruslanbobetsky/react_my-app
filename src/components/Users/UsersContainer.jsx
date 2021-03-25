import React from 'react'
import { connect } from 'react-redux';
import { followAC, SetusersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
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
         dispatch(SetusersAC(users))
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

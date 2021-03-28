import * as axios from 'axios'
import React from 'react'
import usersReducer from '../../redux/users-reducer'
import s from './users.module.css'
import userPhoto from '../../assets/user_icon.jpg'

const Users = (props) => {
   let getUsers = () => {
      if (props.users.length === 0) {
         axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
               props.setUser(response.data.items)
            })
      }
   }
   return <div>
      <button onClick={getUsers}>Get Users</button>
      {
         props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <img src={userPhoto} className={s.user_photo} />
               </div>
            </span>
            <span>
               <div>
                  {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Follow</button>
                     : <button onClick={() => { props.follow(u.id) }}>Unfollow</button>}

               </div>
            </span>
            <span>
               <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
               </span>
               <div>{'u.location.country'}</div>
               <div>{'u.location.city'}</div>
            </span>
         </div>)
      }
   </div>
}

export default Users

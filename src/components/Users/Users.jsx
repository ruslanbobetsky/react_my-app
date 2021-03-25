import React from 'react'
import usersReducer from '../../redux/users-reducer'
import s from './users.module.css'

const Users = (props) => {
   return <div>
      {
         props.users.map(u =>
            <div key={u.id}>
               <span>

                  <div>
                     <img src={u.photoUrl} className={s.user_photo} />
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
                     <div>{u.fullName}</div>
                     <div>{u.status}</div>
                  </span>
                  <div>{u.location.country}</div>
                  <div>{u.location.city}</div>
               </span>
            </div>)
      }
   </div>
}

export default Users

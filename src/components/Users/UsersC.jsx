import React from 'react'
import * as axios from 'axios'
import s from './users.module.css'
import userPhoto from '../../assets/user_icon.jpg'

class Users extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUser(response.data.items)
         })

      onPageChanged = (pageNuber) => {
         this.props.setCurrentPage(pageNuber)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
               this.props.setUser(response.data.items)
               this.props.setTotalUsersCount(response.data.totalCount)
            })
      }
   }

   render() {
      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
      }
      return <div>
         <div>
            {pages.map(p => {
               return <span className={this.props.currentPage === p && s.selected_page}
                  onClick={() => { this.onPageChanged(p) }}>{p} </span>
            })
            }


         </div>
         {
            this.props.users.map(u => <div key={u.id}>
               <span>
                  <div>
                     <img src={userPhoto} className={s.user_photo} />
                  </div>
               </span>
               <span>
                  <div>
                     {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>Follow</button>
                        : <button onClick={() => { this.props.follow(u.id) }}>Unfollow</button>}

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
}


export default Users;
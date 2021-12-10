import React from 'react'
import s from './Users.module.scss'
import axios from 'axios'
import userPhoto from '../../assets/images/80x80.png'
import {UsersPropsType} from './UsersContainer'
import {initialStateUsersType} from '../../redux/usersReducer'

class Users extends React.Component<UsersPropsType, initialStateUsersType> {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
         this.props.setTotalUsersCount(response.data.totalCount)
      })
   }

   onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
      })
   }

   render = () => {
      let pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize)
      let pages = []
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i)
      }

      return (
         <div className={s.users}>
            <div>
               {pages.map(p => <span onClick={() => this.onPageChanged(p)}
                                     className={this.props.usersPage.currentPage === p ? s.selectedPage : undefined}>{p} </span>)}
            </div>
            {
               this.props.usersPage.users.map(u => {
                  return (
                     <div key={u.id}>
                     <span>
                        <div>
                           <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt={'avatar'}/>
                        </div>
                        <div>
                           {
                              u.followed
                                 ? <button onClick={() => this.props.unfollow(u.id)}>unfollow</button>
                                 : <button onClick={() => this.props.follow(u.id)}>follow</button>
                           }
                        </div>
                     </span>
                        <span>
                        <span>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                        </span>
                        <span>
                           <div>{'u.location.country'}</div>
                           <div>{'u.location.city'}</div>
                        </span>
                     </span>
                     </div>
                  )
               })
            }
         </div>
      )
   }
}

export default Users
import React from 'react'
import s from './MyPosts.module.scss'
import Post from './Post/Post'
import {profilePageType} from '../../../redux/state'

const MyPosts = (props: profilePageType) => {

   let postsElement = props.posts.map(p => <Post id={p.id} message={p.post} likesCount={p.like}/>)

   return (
      <div className={s.postsBlock}>
         <h3>my posts</h3>
         <div>
            <div>
               <textarea/>
            </div>
            <div>
               <button>add</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsElement}
         </div>
      </div>
   )
}

export default MyPosts
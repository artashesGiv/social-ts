import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

   // bll ------------------------------------
   let posts = [
      {id: 1, post: 'Hi. how are you!', like: 15},
      {id: 2, post: 'Hello', like: 20},
      {id: 3, post: 'My posts', like: 6},
      {id: 4, post: 'How are you', like: 76},
   ]

   let postsElement = posts.map(p => <Post id={p.id} message={p.post} likesCount={p.like}/>)

   //ui --------------------------------------
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
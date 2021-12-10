import React from 'react'
import s from './MyPosts.module.scss'
import {Post} from './Post/Post'
import {ProfilePostsType} from './MyPostsContainer'

export const MyPosts = (props: ProfilePostsType) => {
   let postsElement = props.profilePage.posts.map(p => <Post key={p.id} id={p.id} message={p.post} likesCount={p.like}/>)
   let newPostElement = React.createRef<HTMLTextAreaElement>()

   const onAddPost = () => {
      props.addPost()
   }

   const onPostChange = () => {
      if (newPostElement.current) {
         let text = newPostElement.current.value
         props.updateTextPost(text)
      }
   }

   return (
      <div className={s.postsBlock}>
         <h3>my posts</h3>
         <div>
            <div>
               <textarea
                  onChange={onPostChange}
                  ref={newPostElement}
                  value={props.profilePage.newTextPost}
               />
            </div>
            <div>
               <button onClick={onAddPost}>add</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsElement}
         </div>
      </div>
   )
}
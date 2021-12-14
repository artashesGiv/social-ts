import React from 'react'
import s from './MyPosts.module.scss'
import {Post} from './Post/Post'
import {postType} from '../../../redux/Propfile/types'

type MyPostsPropsType = {
   posts: postType[]
   newTextPost: string
   addPost: () => void
   updateTextPost: (text: string) => void
}

export const MyPosts = ({posts, updateTextPost, newTextPost, addPost}: MyPostsPropsType) => {

   let postsElement = posts.map(p => <Post key={p.id} id={p.id} message={p.post} likesCount={p.like}/>)
   let newPostElement = React.createRef<HTMLTextAreaElement>()

   const onAddPost = () => {
      addPost()
   }

   const onPostChange = () => {
      if (newPostElement.current) {
         let text = newPostElement.current.value
         updateTextPost(text)
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
                  value={newTextPost}
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
import React from 'react'
import s from './MyPosts.module.scss'
import Post from './Post/Post'
import {addPostType, postType} from '../../../redux/state'

type postsPropsType = {
   posts: Array<postType>
   addPost: addPostType
}

const MyPosts = (props: postsPropsType) => {

   let postsElement = props.posts.map(p => <Post id={p.id} message={p.post} likesCount={p.like}/>)

   let newPostElement = React.createRef<HTMLTextAreaElement>()

   const addPost = () => {
      if (newPostElement.current) {
         let text = newPostElement.current.value
         props.addPost(text)
         newPostElement.current.value = ''
      }
   }

   return (
      <div className={s.postsBlock}>
         <h3>my posts</h3>
         <div>
            <div>
               <textarea ref={newPostElement}/>
            </div>
            <div>
               <button onClick={addPost}>add</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsElement}
         </div>
      </div>
   )
}

export default MyPosts
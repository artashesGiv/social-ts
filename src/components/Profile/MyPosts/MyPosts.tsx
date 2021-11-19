import React from 'react'
import s from './MyPosts.module.scss'
import Post from './Post/Post'
import {actionsTypes, postType} from '../../../redux/state'
import {addPostAC, updateNewTextPostAC} from '../../../redux/profileReducer'

type postsPropsType = {
   posts: Array<postType>
   newTextPost: string
   dispatch: (action: actionsTypes) => void
}

const MyPosts = (props: postsPropsType) => {

   let postsElement = props.posts.map(p => <Post id={p.id} message={p.post} likesCount={p.like}/>)

   let newPostElement = React.createRef<HTMLTextAreaElement>()

   const addPost = () => {
      if (newPostElement.current) {
         props.dispatch(addPostAC())
      }
   }

   const onPostChange = () => {
      if (newPostElement.current) {
         let text = newPostElement.current.value
         props.dispatch(updateNewTextPostAC(text))
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
                  value={props.newTextPost}/>
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
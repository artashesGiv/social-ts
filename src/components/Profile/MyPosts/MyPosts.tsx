import React from 'react'
import s from './MyPosts.module.scss'
import {Post} from './Post/Post'
import {postType} from '../../../redux/Propfile/types'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {maxLength, required} from '../../../utils/validators/validators'
import {Textarea} from '../../common/FormsControls/FormsControls'

type MyPostsPropsType = {
   posts: postType[]
   addPost: (postText: string) => void
}

export const MyPosts = ({posts, addPost}: MyPostsPropsType) => {

   let postsElement = posts.map(p => <Post key={p.id} id={p.id} message={p.post} likesCount={p.like}/>)

   const addNewPost = (values: FormDataType) => {
      addPost(values.postText)
   }

   return (
      <div className={s.postsBlock}>
         <h3>my posts</h3>
         <div>
            <AddPostForm onSubmit={addNewPost}/>
         </div>
         <div className={s.posts}>
            {postsElement}
         </div>
      </div>
   )
}

type FormDataType = {
   postText: string
}

const maxLength30 = maxLength()

const AddPostForm = reduxForm<FormDataType>({form: 'addPost'})(
   (props: InjectedFormProps<FormDataType>) => {

      const {handleSubmit} = props

      return (
         <form onSubmit={handleSubmit}>
            <div>
               <Field placeholder={'Your post message'} name={'postText'} component={Textarea}
                      validate={[required, maxLength30]}/>
            </div>
            <div>
               <button>ADD</button>
            </div>
         </form>
      )
   },
)

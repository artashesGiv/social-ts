import React from 'react'
import s from './MyPosts.module.scss'
import {Post} from './Post/Post'
import {postType} from '../../../redux/Propfile/types'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {maxLength} from '../../../utils/validators/validators'
import {Textarea} from '../../common/FormsControls/FormsControls'

type MyPostsPropsType = {
   posts: postType[]
   addPost: (postText: string) => void
   isOwner: boolean
   owner: string | null
}

export const MyPosts = ({posts, addPost, isOwner, owner}: MyPostsPropsType) => {

   const postsElement = posts.map(p => <Post key={p.id} id={p.id} message={p.post} likesCount={p.like}/>)

   const addNewPost = (values: FormDataType) => {
      addPost(values.postText)
      values.postText = ''
   }

   return (
      <div className={s.postsBlock}>
         <div className={s.wrapper}>
            <h3>{isOwner ? 'Мои записи' : `Записи ${owner}`}</h3>
            <div>
               <AddPostForm onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
               {postsElement}
            </div>
         </div>
      </div>
   )
}

type FormDataType = {
   postText: string
}

const maxLength200 = maxLength(200)

const AddPostForm = reduxForm<FormDataType>({form: 'addPost'})(
   (props: InjectedFormProps<FormDataType>) => {

      const {handleSubmit} = props

      return (
         <form onSubmit={handleSubmit} className={s.form}>
            <div>
               <Field placeholder={'Что вы думаете?'} name={'postText'} component={Textarea}
                      validate={[maxLength200]}/>
            </div>
            <div className={s.button}>
               <button>Добавить</button>
            </div>
         </form>
      )
   },
)

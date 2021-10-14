import React from 'react'
import s from './Post.module.css'

type PropsPost = {
   message: string
   likeCount: number
}

const Post = (props: PropsPost) => {
   return (
      <div className={s.item}>
         <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="avatar"/>
         {props.message}
         <div>
            <span>{props.likeCount} like</span>
         </div>
      </div>
   )

}

export default Post
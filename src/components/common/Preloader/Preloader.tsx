import React from 'react'
import preloader from '../../../assets/images/preloader.svg'

type PreloaderPropsType = {

}

export const Preloader = (props: PreloaderPropsType) => {
   return (
      <div>
         <img src={preloader} alt={'preloader'}/>
      </div>
   )
}
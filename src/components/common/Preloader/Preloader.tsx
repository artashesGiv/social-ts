import React from 'react'
import preloader from '../../../assets/images/preloader.svg'


export const Preloader = () => {

   const style = {
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   }


   return (
      <div style={style}>
         <img src={preloader} alt={'preloader'}/>
      </div>
   )
}
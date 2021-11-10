import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {addMessage, addPost, stateType} from './redux/state'

export const rerenderEntireTree = (state: stateType) => {
   ReactDOM.render(
      <React.StrictMode>
         <App state={state} addPost={addPost} addMessage={addMessage}/>
      </React.StrictMode>,
      document.getElementById('root')
   )
}

reportWebVitals()

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {addMessage, addPost, state, subscribe, updateNewPostText} from './redux/state'

const rerenderEntireTree = () => {
   ReactDOM.render(
      <React.StrictMode>
         <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}/>
      </React.StrictMode>,
      document.getElementById('root')
   )
}

rerenderEntireTree()
subscribe(rerenderEntireTree)
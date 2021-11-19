import React from 'react'
import './App.scss'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {storeType} from './redux/state'

type appPropsType = {
   store: storeType
}

const App = (props: appPropsType) => {
   const state = props.store.getState()

   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header/>
            <Navbar state={state.navbar}/>
            <div className="app-wrapper-content">
               <Route path="/profile" render={() => <Profile state={state.profilePage} dispatch={props.store.dispatch.bind(props.store)}/>}/>
               <Route path="/dialogs" render={() => <Dialogs state={state.dialogsPage} dispatch={props.store.dispatch.bind(props.store)}/>}/>
               <Route path="/news" component={News}/>
               <Route path="/music" component={Music}/>
               <Route path="/settings" component={Settings}/>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App

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
import {stateType} from './redux/state'

type appPropsType = {
   state: stateType
}

const App = (props: appPropsType) => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.navbar}/>
            <div className="app-wrapper-content">
               <Route path="/profile" render={ () => <Profile state={props.state.profilePage}/>}/>
               <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogsPage}/>}/>
               <Route path="/news" component={News}/>
               <Route path="/music" component={Music}/>
               <Route path="/settings" component={Settings}/>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App

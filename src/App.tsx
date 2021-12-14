import React from 'react'
import './App.scss'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import {Header} from './components/Header/Header'
import ProfileContainer from './components/Profile/ProfileContaner'
import {News} from './components/News/News'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {DialogsContainer} from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import {NavbarContainer} from './components/Navbar/NavbarContainer'

export const App = () => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header/>
            <NavbarContainer/>
            <div className="app-wrapper-content">
               <Route path="/" exact render={() => <Redirect to="/profile"/>}/>
               <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
               <Route path="/dialogs" render={() => <DialogsContainer/>}/>
               <Route path="/users" render={() => <UsersContainer/>}/>
               <Route path="/news" component={News}/>
               <Route path="/music" component={Music}/>
               <Route path="/settings" component={Settings}/>
            </div>
         </div>
      </BrowserRouter>
   )
}

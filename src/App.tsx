import React from 'react'
import './App.scss'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import {Header} from './components/Header/Header'
import {Profile} from './components/Profile/Profile'
import {News} from './components/News/News'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {DialogsContainer} from './components/Dialogs/DialogsContainer'
import {UsersContainer} from './components/Users/UsersContainer'
import {NavbarContainer} from './components/Navbar/NavbarContainer'

type AppPropsType = {
}

export const App = (props: AppPropsType) => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header/>
            <NavbarContainer/>
            <div className="app-wrapper-content">
               <Route path="/" exact render={() => <Redirect to="/profile"/>}/>
               <Route path="/profile" render={() => <Profile/>}/>
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

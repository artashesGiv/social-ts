import React from 'react'
import './App.scss'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {News} from './components/News/News'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {Store} from '@reduxjs/toolkit'
import {DialogsContainer} from './components/Dialogs/DialogsContainer'

type AppPropsType = {
   store: Store
}

export const App = (props: AppPropsType) => {
   const state = props.store.getState()

   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header/>
            <Navbar state={state.navBar}/>
            <div className="app-wrapper-content">
               <Route path="/" exact render={() => <Redirect to="/profile"/>}/>
               <Route path="/profile" render={() => <Profile/>}/>
               <Route path="/dialogs" render={() => <DialogsContainer/>}/>
               <Route path="/news" component={News}/>
               <Route path="/music" component={Music}/>
               <Route path="/settings" component={Settings}/>
            </div>
         </div>
      </BrowserRouter>
   )
}

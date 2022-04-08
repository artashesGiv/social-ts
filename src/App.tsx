import React from 'react'
import './App.scss'
import {Redirect, Route, withRouter} from 'react-router-dom'
import ProfileContainer from './components/Profile/ProfileContaner'
import {News} from './components/News/News'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import {NavbarContainer} from './components/Navbar/NavbarContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {initialStateAuthType} from './redux/Auth/types'
import {initializeApp} from './redux/App/appReduser'
import {AppStateType} from './redux/reduxStore'
import {Preloader} from './components/common/Preloader/Preloader'
import {initialStateAppType} from './redux/App/types'

class App extends React.Component<AppPropsType, initialStateAuthType> {

   componentDidMount() {
      this.props.initializeApp()
   }

   render() {
      if (!this.props.app.initialized) {
         return <Preloader/>
      }

      return (
         <div className="app-wrapper">
            <HeaderContainer/>
            <NavbarContainer/>
            <div className="app-wrapper-content">
               <Route path="/" exact render={() => <Redirect to="/profile"/>}/>
               <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
               <Route path="/dialogs" render={() => <DialogsContainer/>}/>
               <Route path="/users" render={() => <UsersContainer/>}/>
               <Route path="/news" component={News}/>
               <Route path="/music" component={Music}/>
               <Route path="/settings" component={Settings}/>
               <Route path="/login" component={Login}/>
            </div>
         </div>

      )
   }
}

type mapStateToPropsType = {
   app: initialStateAppType
}
type mapDispatchToPropsType = {
   initializeApp: () => void
}

type AppPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
   app: state.app,
})

export default compose<React.ComponentType>(
   withRouter,
   connect(mapStateToProps, {initializeApp}),
)(App)

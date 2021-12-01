import React from 'react'
import {connect} from 'react-redux'
import {Navbar} from './Navbar'
import {AppStateType} from '../../redux/redux-store'
import {Dispatch} from '@reduxjs/toolkit'
import {navBarItem} from '../../redux/navbarReducer'

type mapSateToPropsType = {
   elements: Array<navBarItem>
}

type mapDispatchToPropsType = {

}

export type NavbarPropsType = mapSateToPropsType & mapDispatchToPropsType

const mapSateToProps = (state: AppStateType): mapSateToPropsType => {
   return {
      elements: state.navBar.elements
   }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
   return {

   }
}

export const NavbarContainer = connect(mapSateToProps, mapDispatchToProps)(Navbar)
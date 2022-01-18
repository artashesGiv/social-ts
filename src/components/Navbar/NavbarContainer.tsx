import {connect} from 'react-redux'
import {Navbar} from './Navbar'
import {AppStateType} from '../../redux/reduxStore'
import {navBarItem} from '../../redux/Navbar/types'

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

export const NavbarContainer = connect(mapSateToProps, {})(Navbar)
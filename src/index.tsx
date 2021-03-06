import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {store} from './redux/reduxStore'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import './index.scss'


ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
         <App/>
      </Provider>
   </BrowserRouter>,
   document.getElementById('root'),
)

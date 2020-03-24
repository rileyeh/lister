import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'

import { UserProvider } from './Context/user'

ReactDOM.render(
  <UserProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </UserProvider>,
  document.getElementById('root')
)

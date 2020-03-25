import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'

import { UserProvider } from './Context/user'
import { ListProvider } from './Context/lists'

ReactDOM.render(
  <ListProvider>
    <UserProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </UserProvider>
  </ListProvider>,
  document.getElementById('root')
)

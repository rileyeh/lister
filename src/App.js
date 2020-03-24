import React, { useContext } from 'react'
import './App.css'
import { UserContext } from './Context/user'
import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Auth from './Containers/Auth'
import Dash from './Containers/Dash'

const App = () => {
  const { user, register, login, logout } = useContext(UserContext)
  return (
    <div>
      <Header user={user} logout={logout}/>
      <Switch>
        <Route 
          path={`/login`}  
          render={() => {
            return <Auth 
                    user={user}
                    register={register}
                    login={login}/>
            }} />
        <Route 
          path={`/dash`}
          render={() => {
            return <Dash user={user}/>
          }}/>
        <Route 
          path='/' 
          exact 
          render={() => {
            return <Home/>
            }} />
      </Switch>
    </div>
  )
}

export default App

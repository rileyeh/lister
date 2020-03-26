import React, { useContext } from 'react'
import './App.scss'
import { UserContext } from './Context/user'
import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Auth from './Containers/Auth/Auth'
import Dash from './Containers/Dash'
import List from './Components/List/index'

const App = () => {
  const { user, register, login, logout } = useContext(UserContext)
  return (
    <div>
      <Header user={user} logout={logout}/>
      <div className='app-body'>
      <Switch>
        <Route 
          path='/list/:id'
          component={List}/>
        <Route 
          path={`/dash`}
          render={() => {
            return <Dash user={user}/>
          }}/>
        <Route 
          path={`/login`}  
          render={() => {
            return <Auth 
                    user={user}
                    register={register}
                    login={login}/>
            }} />
        <Route 
          path='/' 
          exact 
          render={() => {
            return <Home/>
            }} />
      </Switch>
      </div>
    </div>
  )
}

export default App

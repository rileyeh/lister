import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dash from './Containers/Dash'

export default (
    <Switch>
        <Route path='/' exact component={Dash} />
    </Switch>
)
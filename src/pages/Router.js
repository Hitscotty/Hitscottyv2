import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Home'
import Projects from './Projects'
import About from './About'
import Resume from './Resume'

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/about' component={About}/>
        <Route path='/resume' component={Resume}/>
    </Switch>
)

export default Router
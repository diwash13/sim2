import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
// import Header from './Components/Header/Header'
// import House from './Components/House/House'
import Wizard from './Components/Wizard/Wizard'
import StepOne from './Components/StepOne';
import StepTwo from './Components/StepTwo';
import StepThree from './Components/StepThree'

export default (
    <Switch>
        <Route component={Dashboard} exact path= '/' />
        <Route component={Wizard} path='/wizard' />
        <Route component={StepOne} path='/sOne' />
        <Route component={StepTwo} path='/sTwo' />
        <Route component={StepThree} path='/sThree' />
    </Switch>
)
import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import ModalContainer from './modal/modal'
import { Link } from 'react-router-dom'
import SplashText from './splash_text'

const App = () => (
    <div className='master-div'>
        <ModalContainer />
        <header id='navbar'>
            <Link className='home-link' to='/' ><img className='icon' src={window.brainscape_icon} />BRAINORAMA</Link>
            
            <GreetingContainer />
        </header>
        <div className='splash-text-main'><SplashText /></div>
        {/* <img src={window.background} className='main-image' /> */}


        {/* <Route path='/' component={GreetingContainer}/> */}

        {/* <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} /> */}
    </div>
)

export default App
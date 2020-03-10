import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import ModalContainer from './modal/modal';
import SplashText from './splash_text';
import DeckIndexContainer from './deck/deck_index_container';
import DeckShowContainer from './deck/deck_show_container';
// import CreateDeckContainer from './deck/create_deck_container';
import CreateDeckContainer from './deck/create_deck_container';
import UpdateDeckContainer from './deck/update_deck_container';

const banana = () => {
    return (
        <div>
            <h2>WHAT IS HAPPENING</h2>
        </div>
    )
}

const App = () => (
    <div className='master-div'>
        <ModalContainer />
        <header id='navbar'>
            <Link className='home-link' to='/' ><img className='icon' src={window.brainscape_icon} />BRAINORAMA</Link>
            
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute path='/decks/:deckId' component={DeckShowContainer}/>
            <AuthRoute path='/decks/:deckId/edit' component={UpdateDeckContainer} />
            <Route path='/bananas/banana' component={CreateDeckContainer} />
            <Route path='/decks' component={DeckIndexContainer} />
            <Route path='/' component={SplashText}/>
        </Switch>
        
    </div>
)

export default App
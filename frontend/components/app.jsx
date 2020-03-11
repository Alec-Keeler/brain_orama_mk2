import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import ModalContainer from './modal/modal';
import SplashText from './splash_text';
import DeckIndexContainer from './deck/deck_index_container';
import DeckShowContainer from './deck/deck_show_container';
import CreateDeckContainer from './deck/create_deck_container';
import UpdateDeckContainer from './deck/update_deck_container';
import CardShowContainer from './card/card_show_container';
import CreateCardContainer from './card/create_card_container';
import UpdateCardContainer from './card/update_card_container';

const App = () => (
    <div className='master-div'>
        <ModalContainer />
        <header id='navbar'>
            <Link className='home-link' to='/' ><img className='icon' src={window.brainscape_icon} />BRAINORAMA</Link>
            <Link to='/decks'>Deck List</Link>
            
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute path='/decks/new' component={CreateDeckContainer} />
            <AuthRoute path='/decks/:deckId/cards/new' component={CreateCardContainer} />
            <AuthRoute path='/decks/:deckId/cards/:cardId/edit' component={UpdateCardContainer} />
            <AuthRoute path='/decks/:deckId/cards/:cardId' component={CardShowContainer} />
            <AuthRoute path='/decks/:deckId/edit' component={UpdateDeckContainer} />
            <AuthRoute path='/decks/:deckId' component={DeckShowContainer} />
            <Route path='/decks' component={DeckIndexContainer} />
            <Route path='/' component={SplashText} />
        </Switch>
        
    </div>
)

export default App
import React from 'react';
import ReactDOM from 'react-dom';
import { fetchDecks, fetchDeck, createDeck, updateDeck, deleteDeck } from './util/deck_api_util';
import configureStore from './store/store';
import Root from './components/root';
import {thunkLogin} from './actions/session_actions'
import { thunkRequestDecks, thunkRequestDeck, thunkDeleteDeck } from './actions/deck_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    
    let store;
    
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: { id: window.currentUser.id}
        };
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }

    //testing start
    window.getState = store.getState;
    window.dispatch = store.dispatch
    window.thunkLogin = thunkLogin;
    window.thunkRequestDecks = thunkRequestDecks;
    window.thunkRequestDeck = thunkRequestDeck;
    window.thunkDeleteDeck = thunkDeleteDeck;
    //testing end

    ReactDOM.render(<Root store={store} />, root)
})
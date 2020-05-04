import React from 'react';
import { NavLink, Link } from 'react-router-dom';
let searchComponent = <div></div>

class DeckIndex extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    }

    componentDidMount() {
        this.props.requestDecks();
    }

    deckNameList(decks) {
        let names = [];
        for (let [key, value] of Object.entries(decks)) {
            names.push(value.name);
        }
        return names
    }

    nameCheck(names, searchTerm) {
        let searchWords = searchTerm.toLowerCase().split(' ');
        let matches = [];
        names.forEach(name => {
            let words = name.split(' ');
            if ((this.isMatch(words, searchWords)) === true) {
                matches.push(name);
            }
        })
        return matches
    }

    isMatch(words, searchWords) {
        let status = false;
        words.forEach(word => {
            // if (word.toLowerCase() === searchWords) {
            if (searchWords.includes(word.toLowerCase())) {
                status = true;
            }
        })
        return status;
    }

    getDeckIds(names, decks) {
        let deckList = [];
        for (let [key, value] of Object.entries(decks)) {
            names.forEach(name => {
                if (name === value.name) {
                    deckList.push(value);
                }
            })
        }
        return deckList;
    }

    clearSearch() {
        searchComponent = <div></div>
        document.querySelector('.search-input').value = '';
        this.forceUpdate();
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state) {
            searchComponent = <div className='deck-search-list'>
                <p className='deck-search-none'>Please enter a word or phrase</p>
                <button className='clear-search' onClick={this.clearSearch}>Clear</button>
            </div>;
            this.forceUpdate();
            return;
        }
        let searchTerm = this.state.search.toLowerCase();
        let names = this.deckNameList(this.props.decks);
        let matchingDeckNames = this.nameCheck(names, searchTerm);
        let deckList = this.getDeckIds(matchingDeckNames, this.props.decks);
        
        if (deckList.length === 0) {
            searchComponent = <div className='deck-search-list'>
                <p className='deck-search-none'>No results found</p>
                <button className='clear-search' onClick={this.clearSearch}>Clear</button>
            </div>;
        } else {
            searchComponent = <div className='deck-search-list'>{deckList.map(deck => {
                return (
                    <NavLink className='deck-search-link' to={`/decks/${deck.id}`} onClick={this.clearSearch} ><p>{deck.name}</p></NavLink>
                )
                })}
                <button className='clear-search' onClick={this.clearSearch}>Clear</button>
            </div>;
        }
        this.forceUpdate();
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value});
    }

    render() {
        const { decks } = this.props;
        
        return (
            <div className='master-deck-index'>
                <div className='extras animated bounceInDown delay-1s'>
                    <div><Link className='create-deck-link' to='/decks/new'>Create a new deck!<i className="fas fa-chevron-right"></i></Link></div>
                    <div className='search-form'>
                        <input type="text" onChange={this.update('search')} className='search-input' placeholder='Enter a word or phrase'/>
                        <button onClick={this.handleSubmit} className='search-btn'>Search</button>
                    </div>
                    {searchComponent}
                </div>
                <div className='deck-index-cont animated slideInDown'>
                    <div className='deck-list'>
                        {decks.map(deck => {
                            return (
                                <div className='deck-li-item' key={deck.id}>
                                    <NavLink className='deck-show-link' to={`/decks/${deck.id}`} ><p>{deck.name}</p></NavLink>
                                    <p className='deck-desc'>{deck.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default DeckIndex;
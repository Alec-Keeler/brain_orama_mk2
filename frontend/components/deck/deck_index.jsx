import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class DeckIndex extends React.Component {
    componentDidMount() {
        this.props.requestDecks();
    }

    render() {
        const { decks } = this.props;
        return (
            <div className='master-deck-index'>
                <div><Link className='create-deck-link  animated bounceInDown delay-1s' to='/decks/new'>Create a new deck!<i className="fas fa-chevron-right"></i></Link></div>
                <div className='deck-index-cont animated slideInDown'>
                    <div className='deck-list'>
                        {decks.map(deck => {
                            return (
                                <div className='deck-li-item'>
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
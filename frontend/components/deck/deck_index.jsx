import React from 'react';
import { Link } from 'react-router-dom';

class DeckIndex extends React.Component {
    componentDidMount() {
        this.props.requestDecks();
    }

    render() {
        const { decks } = this.props;
        return (
            <div>
                <Link to='/decks/new'>Create a new deck!</Link>
                <ul>
                    {decks.map(deck => {
                        return (
                            <li>
                                <Link to={`/decks/${deck.id}`} >{deck.name}</Link>
                                <p>{deck.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default DeckIndex;
import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';


class DeckForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.deck;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitDeck(this.state)
            .then((res) => this.props.history.push(`/decks/${res.deck.id}`))
    }

    render() {
        return (
            <div className='deck-form-container'>
                <h1 className='deck-form-title'>{this.props.formType}</h1>
                <form className='deck-form' onSubmit={this.handleSubmit}>
                    <label className='deck-input-name'>Name</label>
                        <div className='deck-input-div'><input className='deck-input-box-n' type="text" value={this.state.name} onChange={this.update('name')} /></div>
                    <label className='deck-input-name'>Description</label>
                        <div className='deck-input-div'><textarea maxLength='300' className='deck-input-box-d' value={this.state.description} onChange={this.update('description')} /></div>
                    <div className='deck-form-submit-div'><button className='deck-form-submit' type='submit' value={this.props.formType}>{this.props.formType}</button></div>
                </form>
            </div>
        )
    }
}

export default withRouter(DeckForm);

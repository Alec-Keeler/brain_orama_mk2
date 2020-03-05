import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom'

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const display = this.props.currentUser ? (
        <div className='greeting-container'>
            
            <button className='dropdown-button'><i className="fas fa-sort-down"></i> {this.props.currentUser.first_name} {this.props.currentUser.last_name}</button>
            <div className='dropdown-content'>
                <a onClick={this.props.logout}>Log Out</a>
            </div>
        </div>
    ) : (
        <div className='greeting-container'>
            <a onClick={() => this.props.openModal('login')} className='splash-login'>Log In</a>
            <a onClick={() => this.props.openModal('signup')} className='splash-signup'>Get Started</a>
        </div>
    )
    
    return (
        <div>
            {display}
        </div>
    )
    }
}

export default withRouter(Greeting)
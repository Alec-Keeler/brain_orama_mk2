import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }


        this.handleSubmit = this.handleSubmit.bind(this)
        // this.renderErrors = this.renderErrors.bind(this)
    }


    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.stopPropagation();
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.closeModal())
            // .then(() => this.props.history.push('/'))
    }

    renderErrors() {
        if (!this.props.errors){
            return null
        }
        return(
            <ul className='errors-ul'>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        const display = (this.props.formType === 'login') ? (
            //login display
            <div className='login-form-container'>
                <h2>Log In</h2>
                <button onClick={this.props.closeModal} className='close-x'><i className="fas fa-times"></i></button>
                <form onSubmit={this.handleSubmit} className='login-form'>
                    <label className='form-label'>Email</label>
                        <input type="text" onChange={this.handleInput('email')} className='login-input'/>
                    <label className='form-label'>Password</label>
                        <input type="password" onChange={this.handleInput('password')} className='login-input'/>
                    <div className='submit-container'>
                        <input type='submit' value='Log In' className='oj-button'/>
                        {/* <button type='text' onClick={() => this.props.loginDemo().then(() => this.props.closeModal())} className='oj-button'>Demo User</button> */}
                        <button type='text' className='oj-button'
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.loginDemo();
                                this.props.closeModal();
                            }}
                        >Demo User</button>
                    </div>
                </form>
                <div className='other-form-container'>{this.props.otherForm}</div>
                <div className='errors-div'>{this.renderErrors()}</div>
            </div>
        ) : (
            //signup display
            <div className='signup-form-container'>
                <h2>Get Started</h2>
                    <button onClick={this.props.closeModal} className='close-x'><i className="fas fa-times"></i></button>
                <form onSubmit={this.handleSubmit} className='signup-form'>
                    <label className='form-label'>First Name</label>
                        <input type="text" onChange={this.handleInput('first_name')} className='signup-input' />
                    <label className='form-label'>Last Name</label>
                        <input type="text" onChange={this.handleInput('last_name')} className='signup-input' />
                    <label className='form-label'>Email</label>
                        <input type="text" onChange={this.handleInput('email')} className='signup-input' />
                    <label className='form-label'>Password</label>
                        <input type="password" onChange={this.handleInput('password')} className='signup-input' />
                    <div className='signup-container'>
                        <input type='submit' value='Sign Up' className='oj-signup' />
                    </div>
                </form>
                <div className='other-form-container'>{this.props.otherForm}</div>
                <div className='errors-div'>{this.renderErrors()}</div>
            </div>
        )
        return (
            <div>
                {display}
            </div>
        )
    }

}

export default SessionForm;
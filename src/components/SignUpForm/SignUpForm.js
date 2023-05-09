//builds components from state
import { Component } from 'react';
/*
1) phase 1: create phase - when component first mounts to the DOM
2) phase 2: update phase - state changes and component needs to be rerendered
3)phase 3: Destruction phase - when the UI needs to be replaced with a newever version
*/

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: '',
    };
    render() {
        const disabled = this.state.password !== this.state.confirm
        return (
            //this is how we return UI
            <div>
                <div className='form-container'>
                    <form autoComplete='off' onSubmit={this.handleSubmit}>
                        <label>name</label>
                        <input 
                            type='text' 
                            name='name' 
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                        />
                        <label>Email</label>
                        <input
                            type='email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                        <label>password</label>
                        <input
                            type='password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                        <label>Confirm</label>
                        <input
                            type='password'
                            name='confirm'
                            value={this.state.confirm}
                            onChange={this.handleChange}
                            required
                        />
                        <button type='submit' disabled={disabled}>Sign Up
                        </button>
                    </form>
                </div>
                <p className='error-message'>&nbsp;{this.state.error}</p>
            </div>
        );
    }
}


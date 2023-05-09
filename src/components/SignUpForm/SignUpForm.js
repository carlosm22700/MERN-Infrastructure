//builds components from state
import { Component } from 'react';
import { signUp } from "../../utilities/users-service"
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

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };
    
    //define the handleSubmit event handler method here

    handleSubmit = async (evt) => {
        //prevent form from being submitted to the server
        evt.preventDefault();
        try {
            const formData = {...this.state};
            delete formData.confirm;
            delete formData.error;

            //this will call signUp function that makes a AJAX request using formData
            const user = await signUp(formData);
            console.log(user)
        } catch {
            this.setState({error: 'Sign Up Failed - Try Again'});
        }
    }

    render() {
        const disabled = this.state.password !== this.state.confirm
        return (
            //this is how we return UI
            <div>
                <div className='form-container'>
                    <form autoComplete='off' onSubmit={this.handleSubmit}>
                        <label>Name</label>
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
                        <label>Password</label>
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


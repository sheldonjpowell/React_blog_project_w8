import React, { Component } from 'react'

export default class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }
    render() {
        return (
            <form onSubmit= {this.handleSubmit}>
                <h1 className="text-center">Log In Page</h1>
                <h3 className='text-center'>Log In</h3>
                <div className='form-group'>
                    <label htmlFor='username'>UserName</label>
                    <input type='text' name='username' className='form-control' placeholder='Username' />
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' className='form-control' placeholder='Password' />
                    <input type='submit' className='btn btn-dark w-100' value='SignUp' />
                </div>
            </form>
        )
    }
}

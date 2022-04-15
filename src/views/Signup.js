import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function Signup(props) {
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        // confirm passwords
        let password = e.target.password.value;
        let confirmPass = e.target.confirmPass.value;
        if (password !== confirmPass){
            props.flashMessage('These Passwords are NOT...Matching.', 'warning')
            console.log('hey this B wrong Boii!')
            // navigate('/Signup')
        } else {
            // Set up request from flask api
            let myHeaders = new Headers;
            myHeaders.append("Content-Type", "application/json")

            let data = JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: password,
            })
        fetch("https://kekambas-blog.herokuapp.com/auth/users", {
            method: 'POST',
            headers: myHeaders,
            body: data
        }) .then(res => res.json())
            .then(data => {
                if (data.error){
                    props.flashMessage(data.error, 'danger')
                } else {
                    props.flashMessage(`${data.username} has Signed Up`, 'success')
                    navigate('/')

                }
                console.log(data)
            })
            
            
            
        }
    }
    return (
            <form onSubmit={handleSubmit}>
                <h1 className="text-center">Sign Up Page</h1>
                <div className='form-group'>
                    <label htmlFor='username'>UserName</label>
                    <input type='text' name='username' className='form-control' placeholder='Username' />
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' className='form-control' placeholder='Email' />
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' className='form-control' placeholder='Password' />
                    <label htmlFor='confirmPass'>Confirm Password</label>
                    <input type='password' name='confirmPass' className='form-control' placeholder='Confirm Password' />
                    <input type='submit' className='btn btn-dark w-100' value='SignUp' />

                </div>
            </form>
        
    )
}

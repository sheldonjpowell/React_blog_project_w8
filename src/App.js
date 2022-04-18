import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AlertMessage from './components/AlertMessage';
import Nav from "./components/Nav";
import Blog from './views/Blog';
import CreatePost from './views/CreatePost';
import Home from './views/Home';
import Login from './views/Login';
import Logout from './views/Logout';
import Signup from './views/Signup';
import SinglePost from './views/SinglePost';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: null,
            message: null,
            category: null,
            loggedIn: localStorage.getItem('token') ? true : false
        }
    }

    

    flashMessage = (message, category) => {
        this.setState({message,category})
    }

    login = () => {
        this.setState({loggedIn: true})
    }

    logout = () => {
        localStorage.removeItem('token');
        this.flashMessage('You have successfully logged out', 'dark')
        this.setState({
            loggedIn: false
        })
    }
    render(){

        return (
            <>
                <Nav loggedIn={this.state.loggedIn} logUserOut={this.logout} />
                <div className='container'>
                    {this.state.message ? <AlertMessage category={this.state.category} message={this.state.message} flashMessage={this.flashMessage}/> : null}
                    
                    <h1 className='text-center'>AWW <strong>YEAH!</strong> FAMILY WHAT'S GUUUD</h1>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/Home' element={<Home/>}/>
                        <Route path='Logout' element={<Logout/>}/>
                        <Route path='Signup' element={<Signup flashMessage={this.flashMessage} />}/>
                        <Route path='Login' element={<Login flashMessage={this.flashMessage} login={this.login} />}/>
                        <Route path='Blog' element={<Blog loggedIn={this.state.loggedIn} />}/>
                        <Route path='Createpost' element={<CreatePost flashMessage={this.flashMessage} loggedIn={this.state.loggedIn} />}/>
                        <Route path='/Blog/:postId' element={<SinglePost flashMessage={this.flashMessage} loggedIn={this.state.loggedIn} />}/>
                        
                    </Routes>
                  
                </div>
            </>
        )
    }
}

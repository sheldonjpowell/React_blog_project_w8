import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AlertMessage from './components/AlertMessage';
import Nav from "./components/Nav";
import Home from './views/Home';
import Login from './views/Login';
import Logout from './views/Logout';
import Signup from './views/Signup';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: null,
            message: null,
            category: null
        }
    }

    

    flashMessage = (message, category) => {
        this.setState({message,category})
    }


    render(){

        return (
            <>
                <Nav />
                <div className='container'>
                    {this.state.message ? <AlertMessage category={this.state.category} message={this.state.message} flashMessage={this.flashMessage}/> : null}
                    
                    <h1 className='text-center'>AWW <strong>YEAH!</strong> FAMILY WHAT'S GUUUD</h1>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/Home' element={<Home/>}/>
                        <Route path='/Logout' element={<Logout/>}/>
                        <Route path='/Signup' element={<Signup flashMessage={this.flashMessage} />}/>
                        <Route path='/Login' element={<Login flashMessage={this.flashMessage}/>}/>
                        
                    </Routes>
                  
                </div>
            </>
        )
    }
}

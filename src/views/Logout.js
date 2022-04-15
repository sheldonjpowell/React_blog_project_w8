import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        
        return (
            <>
                <h1 className="text-center">Log Out Page</h1>
                {this.props.name ? (<h1>Hello {this.props.name}!</h1>) : (null)}
                
            </>
        )
    }
}
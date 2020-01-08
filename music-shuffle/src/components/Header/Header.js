import React, { Component } from 'react';
import classes from './Header.css';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            headerElements: ['Premium', 'Help', 'Download', 'Sign up', 'Login']
        }
    }
    render() {
        return (
            <div className={classes}>
                img
                {this.state.headerElements.map( (element) => {
                    return <li>{element}</li>
                })}
            </div>
        )
    }
}

export default Header;
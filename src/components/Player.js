import React, { Component } from 'react';

export default class Player extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            number: '',
            img: ''
        }
    }

    render() {
        return(
            <div>Player.js</div>
        )
    }
}
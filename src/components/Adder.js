import React, { Component } from 'react';

export default class Adder extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            number: '',
            img: '',
        }
    }

    render() {
        return(
            <div>Adder.js</div>
        )
    }
}
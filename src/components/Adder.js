import React, { Component } from 'react';
import axios from 'axios'
import './adder.css'

export default class Adder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: '',
            img: '',
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addPlayer() {
        axios.post('/api/draft', this.state)
            .then(res => {
                this.props.history.push('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        console.log(this.state);

        return (
            <div className="adder">
                <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"></link>
                <input
                    placeholder="Add a Player Name"
                    type="text"
                    name="name"
                    value={this.state.nameInput}
                    onChange={(e) => this.handleChange(e)}
                />
                <input
                    placeholder="Add a Number"
                    type="text"
                    name="number"
                    value={this.state.numberInput}
                    onChange={(e) => this.handleChange(e)}
                />
                <input
                    placeholder="Add an Image URL"
                    type="text"
                    name="image"
                    value={this.state.imgInput}
                    onChange={(e) => this.handleChange(e)}
                />
                <button onClick={() => this.addPlayer()} className="add-button">Add Player</button>
            </div>
        )
    }
}
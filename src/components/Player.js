import React, { Component } from 'react';
import './player.css';

export default class Player extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            number: '',
            image: '',
            editToggle: false
        }
    }

    toggleEdit() {
        this.setState({
            editToggle: !this.state.editToggle
        })
        if (this.state.editToggle && this.state.number) {
            this.props.changeNumberFn(this.props.playerObj.id, {number: this.state.number});
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div className="player">
                <h3>{this.props.playerObj.name}</h3>
                <h5>#{this.props.playerObj.number}</h5>
                <img src={this.props.playerObj.image} />
                {this.state.editToggle ? <input placeholder={this.props.playerObj.number} onChange={e => this.handleChange(e)} name="number"/> : null}
                <br/>
                <button onClick={() => this.toggleEdit()}>Change Number</button>
                <br/>
                <button onClick={() => this.props.tradeFn(this.props.playerObj.id)}>Trade Player</button>
            </div>
        )
    }
}
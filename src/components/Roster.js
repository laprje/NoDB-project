import React, { Component } from 'react';
import axios from 'axios'
import Player from './Player'
import './roster.css'

export default class Roster extends Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
        this.changeNumber = this.changeNumber.bind(this);
        this.trade = this.trade.bind(this);
    }

    componentDidMount() {
        axios
            .get('/api/players')
            .then(res => {
                this.setState({
                    players: res.data
                })
            })
    }

    changeNumber(id, body) {
        axios
            .put(`/api/players/${id}`, body)
            .then(res => {
                this.setState({
                    players: res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    trade(id) {
        axios  
            .delete(`/api/players/${id}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    roster: res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        console.log(this.state)
        return(
            <div className="roster">
              {this.state.players.map (el => (
                <Player playerObj={el} key={el.id}
                changeNumberFn={this.changeNumber}
                tradeFn={this.trade}
                />
                )
                )}
                <br/>
            </div>
        )
    }
}
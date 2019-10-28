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
        this.waive = this.waive.bind(this);
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
                    .post(`/api/trade/${id}`)
                    .then(res => {
                        this.setState({
                            players: res.data
                        })
                    })
            .catch(error => {
                console.log(error)
            })

    }

    waive(id) {
        axios
            .delete(`/api/players/${id}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    players: res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        console.log(this.state)
        return (
            <div className="roster">
                <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"></link>
                {this.state.players.map(el => (
                    <Player playerObj={el} key={'player' + el.id}
                        changeNumberFn={this.changeNumber}
                        waiveFn={this.waive}
                        tradeFn={this.trade}
                    />
                )
                )}
                <br />
            </div>
        )
    }
}
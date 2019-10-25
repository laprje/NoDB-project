import React, { Component } from 'react';

export default class Roster extends Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    render() {
        return(
            <div>
                Roster.js
            </div>
        )
    }
}
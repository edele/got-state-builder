import React, { Component } from 'react';
import Game from './game'
import Form from './form'

class Games extends Component {
    constructor() {
        super()
        this.state = getInitialState()
    }

    addGame() {

    }

    save() {

    }

    showData() {

    }

    render() {
        return (<div>
            <div>
                <h3>Games</h3>

                <Form/>

                <button onClick={this.save.bind(this)}>save to localStorage</button>
                <button onClick={this.showData.bind(this)}>serialize</button>
            </div>
        </div>);
    }
}

const getFieldInitialState = id => {
    return { value: '', id }
}

const getInitialState = () => {
    const savedState = window.localStorage.gamesState;
    if (savedState) return JSON.parse(savedState);

    const state = {
        games: []
    };

    return state;
}

export default Games;

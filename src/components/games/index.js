import React, { Component } from 'react';
import Game from './game'
import Form from './form'

export default class Games extends Component {
    constructor() {
        super()

        this.onSubmit = this.onSubmit.bind(this)
        this.save = this.save.bind(this)
        this.showData = this.showData.bind(this)

        this.state = getInitialState()
    }

    addGame() {

    }

    save() {

    }

    showData() {

    }

    onSubmit(formState) {
        let id = 1;
        const games = this.state.games;

        if (games.length) {
            const lastItem = games[games.length - 1];
            id = lastItem.id + 1;
        }

        const game = {id, ...formState};

        this.setState({
            games: [...games, game]
        })
    }

    componentDidMount() {
        
    }

    render() {
        return (<div>
            <div>
                <h3>Games</h3>
                { this.state.games.map(game => {
                    return (<Game
                        key={game.id}
                        {...game}
                    />)
                })}

                <Form onSubmit={this.onSubmit} players={this.state.players} />

                <button onClick={this.save}>save to localStorage</button>
                <button onClick={this.showData}>serialize</button>
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
        games: [],
        players: []
    };

    return state;
}

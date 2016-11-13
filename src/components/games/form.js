import React, { Component } from 'react';
import houses from '../../domain/houses'
import PositionField from './positionField'
import WinTypeField from './winTypeField'

export default class Game extends Component {
    constructor() {
        super()

        this.onPositionChange = this.onPositionChange.bind(this)
        this.onWinTypeChange = this.onWinTypeChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = getInitialState()
    }

    onPositionChange(value, houseId) {
        const playerId = Number(value);
        let positions = this.state.positions.slice();

        positions.map(position => {
            if (position.houseId === houseId)
                position.playerId = playerId;

            return position;
        })

        this.setState({ positions });
    }

    onWinTypeChange(value) {
        const winType = Number(value);
        this.setState({ winType });
    }

    onSubmit() {
        this.props.onSubmit(this.state);
        this.setState({ ...getInitialState() });
    }

    render() {
        return (
            <div>
                { this.state.positions.map(position => <PositionField
                    players={this.props.players}
                    key={position.houseId}
                    onChange={this.onPositionChange}
                    {...position}
                />)}
                <WinTypeField onChange={this.onWinTypeChange} />
                <button onClick={this.onSubmit}>+</button>
            </div>
        )
    }
}

const getInitialState = () => {
    let state = {
        positions: [
            { houseId: 1, playerId: 0 },
            { houseId: 2, playerId: 0 },
            { houseId: 3, playerId: 0 },
            { houseId: 4, playerId: 0 },
            { houseId: 5, playerId: 0 },
            { houseId: 6, playerId: 0 }
        ],
        winType: 1
    };

    return state;
}

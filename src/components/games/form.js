import React, { Component } from 'react';
import houses from '../../domain/houses'
import HouseField from './houseField'
import WinTypeField from './winTypeField'

class Game extends Component {
    constructor() {
        super()
        this.state = getInitialState()
    }

    onHouseChange(value, houseId) {
        const playerId = Number(value);
        let houses = this.state.houses.slice();

        houses.map(field => {
            if (field.houseId === houseId)
                field.playerId = playerId;

            return field;
        })

        this.setState({ houses });
    }

    onWinTypeChange(value) {

    }

    render() {
        return (
            <div>
                { houses.map(house => <HouseField
                    key={house.id}
                    onChange={this.onHouseChange.bind(this)}
                    {...house}
                />)}
                <WinTypeField onChange={this.onWinTypeChange.bind(this)} />
            </div>
        )
    }
}

const getInitialState = () => {
    let state = {
        houses: [
            { houseId: 1, playerId: 0 },
            { houseId: 2, playerId: 0 },
            { houseId: 3, playerId: 0 },
            { houseId: 4, playerId: 0 },
            { houseId: 5, playerId: 0 },
            { houseId: 6, playerId: 0 }
        ],
        winType: 0
    };

    return state;
}

export default Game;

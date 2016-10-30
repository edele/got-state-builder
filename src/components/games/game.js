import React, { Component } from 'react';
import houses from '../../domain/houses'
import winTypes from '../../domain/winTypes'

class Game extends Component {
    render() {
        const players = JSON.parse(window.localStorage.playersData).players;
        const nameStyle = { width: 72, display: 'inline-block' }
        const winTypeName = winTypes.find(wt => wt.id === this.props.winType).name;

        return (
            <div style={{ marginBottom: 20, fontSize: 12 }}>
                { this.props.positions.map(position => {
                    const house = houses.find(house => house.id === position.houseId);
                    const houseName = house ? house.name : '. .';
                    const player = players.find(player => player.id === position.playerId);
                    const playerName = player ? player.name : '. .';

                    return (<div key={house.id}>
                        <span style={nameStyle}>{houseName}</span>
                        {playerName}
                    </div>)
                })}
                <div>
                    <span style={nameStyle}>Win type</span>
                    {winTypeName}
                </div>
            </div>
        )
    }
}

export default Game;

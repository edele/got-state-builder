import React, { Component } from 'react';

class Game extends Component {
    render() {
        const players = [
            { id: 0, name: '. .'},
            ...JSON.parse(window.localStorage.playersData).players
        ];

        const nameStyle = {
            width: 90,
            display: 'inline-block'
        }

        return (
            <div>
                <span style={nameStyle}>
                    {this.props.name}
                </span>
                <select onChange={e => this.props.onChange(
                    e.currentTarget.value,
                    this.props.id
                )}>
                    { players.map(player => (
                        <option key={player.id} value={player.id}>
                            {player.name}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
}

export default Game;

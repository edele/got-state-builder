import React, { Component } from 'react';
import houses from '../../domain/houses'

class PositionField extends Component {
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
                    {houses.find(h => h.id === this.props.houseId).name}
                </span>
                <select
                    value={this.props.playerId}
                    onChange={e => this.props.onChange(
                        e.currentTarget.value,
                        this.props.houseId
                    )}
                >
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

export default PositionField;

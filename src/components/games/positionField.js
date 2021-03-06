import React, { Component } from 'react';
import houses from '../../domain/houses'

export default class PositionField extends Component {
    render() {
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
                    <option value="">. .</option>
                    { this.props.players.map(player => (
                        <option key={player.id} value={player.id}>
                            {player.name}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
}

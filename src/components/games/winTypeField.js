import React, { Component } from 'react';
import winTypes from '../../domain/winTypes'

class Game extends Component {
    render() {
        const nameStyle = {
            width: 90,
            display: 'inline-block'
        };

        return (
            <div style={{marginTop: 10, marginBottom: 15}}>
                <span style={nameStyle}> Win type: </span>
                <select onChange={e => this.props.onChange(e.currentTarget.value)}>
                    { winTypes.map(winType => (
                        <option key={winType.id} value={winType.id}>
                            {winType.name}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
}

export default Game;

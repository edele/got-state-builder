import React, { Component } from 'react';
import winTypes from '../../domain/winTypes'

export default class Form extends Component {
    render() {
        const nameStyle = {
            width: 90,
            display: 'inline-block'
        };

        return (
            <div>
                <span style={nameStyle}> Win type: </span>
                <select value={this.props.value} onChange={e => this.props.onChange(e.currentTarget.value)}>
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

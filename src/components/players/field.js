import React, { Component } from 'react';
import gameRules from '../../domain/gameRules'

class PlayerField extends Component {
    renderRemoveButton() {
        const isDeletable = this.props.index > gameRules.minPlayers - 1;

        if (isDeletable) return (
            <button onClick={this.props.onRemove}>×</button>
        );

        return;
    }

    render() {
        return (
            <div>
                <input
                    placeholder={"player " + (this.props.index + 1)}
                    value={this.props.value}
                    onChange={e => this.props.onChange(
                        e.currentTarget.value,
                        this.props.id
                    )}
                    autoFocus={this.props.autoFocus}
                />
                {this.renderRemoveButton()}
            </div>
        )
    }
}

export default PlayerField;

import React, { Component } from 'react';
import Field from './field'
import gameRules from '../../domain/gameRules'

class Players extends Component {
    constructor() {
        super()
        this.state = getInitialState()
    }

    addField() {
        const fields = this.state.fields;
        const lastItem = fields[fields.length - 1];
        const id = lastItem.id + 1;
        this.setState({
            fields: [...this.state.fields, getFieldInitialState(id)]
        })
    }

    onFieldRemove(id) {
        console.log(id)
        this.setState({
            fields: this.state.fields.filter(field => field.id !== id)
        });
    }

    onFieldChange(value, id) {
        let fields = this.state.fields.slice();

        fields.map(field => {
            if (field.id === id)
                field.value = value;

            return field;
        })

        this.setState({ fields });
    }

    save() {
        window.localStorage.playersState = JSON.stringify(this.state);
    }

    render() {
        return (<div>
            <h3>Players</h3>

            { this.state.fields.map((field, index) => {
                return (<Field
                    key={field.id}
                    index={index}
                    onRemove={this.onFieldRemove.bind(this, field.id)}
                    onChange={this.onFieldChange.bind(this)}
                    {...field}
                />)
            })}

            <button onClick={this.addField.bind(this)}>+</button>
            <button onClick={this.save.bind(this)}>save</button>
        </div>);
    }
}

const getFieldInitialState = id => {
    return { value: '', id }
}

const getInitialState = () => {
    const savedState = window.localStorage.playersState;
    if (savedState) return JSON.parse(savedState);

    let state = { fields: [] };

    for (let i = 0; i < gameRules.minPlayers; i++) {
        state.fields.push(getFieldInitialState(i))
    }

    return state;
}

export default Players;

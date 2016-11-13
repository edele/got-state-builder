import React, { Component } from 'react';
import Field from './field'
import gameRules from '../../domain/gameRules'

export default class Players extends Component {
    constructor() {
        super()

        this.addField = this.addField.bind(this)
        this.save = this.save.bind(this)
        this.onFieldChange = this.onFieldChange.bind(this)
        this.showData = this.showData.bind(this)
        this.onFieldRemove = this.onFieldRemove.bind(this)

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
        window.localStorage.playersFormState = JSON.stringify(this.state);
        window.localStorage.playersData = JSON.stringify(this.serialize());
    }

    serialize() {
        const fields = this.state.fields;
        const filter = field => !!field.value;
        const rename = field => { return { name: field.value, id: field.id } };
        const players = fields.filter(filter).map(rename);

        return { players };
    }

    showData() {
        prompt('Ctrl+A and copy json ↓', JSON.stringify(this.serialize(), null, 2))
    }

    render() {
        let focusedFieldIndex = -1;
        this.state.fields.find((field, index) => {
            if (focusedFieldIndex < 0 && field.value === '')
                focusedFieldIndex = index;
        })

        return (<div>
            <div>
                <h3>Players</h3>

                { this.state.fields.map((field, index) => {
                    return (<Field
                        key={field.id}
                        index={index}
                        onRemove={this.onFieldRemove.bind(null, field.id)}
                        onChange={this.onFieldChange}
                        autoFocus={index === focusedFieldIndex}
                        {...field}
                    />)
                })}

                <button onClick={this.addField}>+</button>
                <button onClick={this.save}>save to localStorage</button>
                <button onClick={this.showData}>serialize</button>
            </div>
        </div>);
    }
}

const getFieldInitialState = id => {
    return { value: '', id }
}

const getInitialState = () => {
    const savedState = window.localStorage.playersFormState;
    if (savedState) return JSON.parse(savedState);

    let state = { fields: [] };

    for (let i = 0; i < gameRules.minPlayers; i++) {
        state.fields.push(getFieldInitialState(i + 1))
    }

    return state;
}

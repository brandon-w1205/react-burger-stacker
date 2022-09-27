import React, { Component } from 'react'

export default class Ingredients extends Component {
    render() {
        return (
            <>
                <ul>{this.props.ingredients.name}</ul>
            </>
        )
    }
}
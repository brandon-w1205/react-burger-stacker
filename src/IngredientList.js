import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render() {
        const anIngredient = this.props.listOfIngredients.map((ingredient, i) => {
            return (
                <button key={`key${i}`} onClick={() => this.props.clickFunction(ingredient)}>
                    <Ingredient
                        ingredients={ingredient}
                    />
                </button>
            )
        })
        return (
            <div className="list">
                {anIngredient}
            </div>
        )
    }
}
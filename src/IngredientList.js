import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render() {
        const anIngredient = this.props.listOfIngredients.map((ingredient, i) => {
            return (
                <Ingredient 
                    ingredients={ingredient}
                    key={`key${i}`}
                />
            )
        })
        return (
            <div>
                {/* <p>{this.props.listOfIngredients[1].name}</p> */}
                {anIngredient}
            </div>
        )
    }
}
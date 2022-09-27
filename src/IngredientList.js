import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {

    handleClick = (e) => {
        console.log("I have been clicked")
        
    }

    render() {
        const anIngredient = this.props.listOfIngredients.map((ingredient, i) => {
            return (
                <button key={`key${i}`} onClick={this.handleClick}>
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
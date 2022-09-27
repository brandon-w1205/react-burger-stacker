import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {

    handleClick = (e) => {
        console.log("I have been clicked")
        // const addIngredient = e.target.value
        // this.state.setState(prevState => {
        //     return (
        //         {ingredients: this.props.ingredients},
        //         {burgerArr: [...prevState.burgerArr, addIngredient]}
        //     )
        // })
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
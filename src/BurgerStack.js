import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerStack extends Component {
    render() {
        const summon = this.props.burgerArr.map((ingredient, i) => {
            return (
                <button style={{backgroundColor: ingredient.color}} onClick={() => {this.props.handleSoloClear(ingredient)}}>
                    <Ingredient
                        ingredients={ingredient}
                        key={`key${i}`}
                    />
                </button>

            )
        })
        return (
            <div className="list">
                {summon}
            </div>
        )
    }
}
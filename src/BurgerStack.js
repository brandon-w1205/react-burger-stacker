import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerStack extends Component {
    render() {
        const summon = this.props.burgerArr.map((ingredient, i) => {
            return (
                <Ingredient
                    ingredients={ingredient}
                    key={`key${i}`}
                />
            )
        })
        return (
            <div>
                {summon}
            </div>
        )
    }
}
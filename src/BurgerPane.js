import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default class BurgerPane extends Component {
    render() {

        return (
            <div>
                <BurgerStack
                    listOfIngredients={this.props.listOfIngredients}
                />
                <ClearBurger />
            </div>
        )
    }
}
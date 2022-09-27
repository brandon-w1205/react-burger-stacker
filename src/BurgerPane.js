import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default class BurgerPane extends Component {
    render() {
        // handleFilterChange = (e) => {
        //     const stackValue = e.target.value
        // }
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
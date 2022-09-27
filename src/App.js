import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'



export default class App extends Component {
  state = {
    ingredients: [
      { name: 'Kaiser Bun', color: 'saddlebrown' },
      { name: 'Sesame Bun', color: 'sandybrown' },
      { name: 'Gluten Free Bun', color: 'peru' },
      { name: 'Lettuce Wrap', color: 'olivedrab' },
      { name: 'Beef Patty', color: '#3F250B' },
      { name: 'Soy Patty', color: '#3F250B' },
      { name: 'Black Bean Patty', color: '#3F250B' },
      { name: 'Chicken Patty', color: 'burlywood' },
      { name: 'Lettuce', color: 'lawngreen' },
      { name: 'Tomato', color: 'tomato' },
      { name: 'Bacon', color: 'maroon' },
      { name: 'Onion', color: 'lightyellow' }
    ],
    burgerArr: []
  }

  handleClick = (e) => {
    console.log("I have been clicked")
    const addIngredient = e
    this.setState(prevState => {
      return (
        { ingredients: this.props.ingredients },
        { burgerArr: [ addIngredient, ...prevState.burgerArr] }
        
      )
    })
    console.log(this.state.burgerArr)
  }

  render() {
    return (
      <div className="App">
        <div className="ingredientList">
          <IngredientList
            listOfIngredients={this.state.ingredients}
            burgerArr={this.state.burgerArr}
            clickFunction={this.handleClick}
          />
        </div>
        <div className="burgerPane">
          <BurgerPane
            listOfIngredients={this.state.ingredients}
            burgerArr={this.state.burgerArr}
          />
        </div>
      </div>
    )
  }
}
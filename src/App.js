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
    ]
  }
  render() {
    return (
      <div className="App">
        <div className="ingredientList">
          <IngredientList
            listOfIngredients={this.state.ingredients}
          />
        </div>
        <div className="burgerPane">
          <BurgerPane
            listOfIngredients={this.state.ingredients}
          />
        </div>
      </div>
    )
  }
}
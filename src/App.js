import { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'


export default function App() {
  const [state, setState] = useState({
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
  })

  const handleClick = (e) => {
    console.log("I have been clicked")
    const addIngredient = e
    setState(
      {
        ingredients: [...state.ingredients],
        burgerArr: [addIngredient, ...state.burgerArr]
      }

    )
    console.log(state.burgerArr)
  }

  const handleClear = () => {
    setState(
      {
        ingredients: [...state.ingredients],
        burgerArr: []
      }
    )
  }

  const handleSoloClear = (e) => {
    state.burgerArr.splice(state.burgerArr.indexOf(e), 1)
    setState(
      {
        ingredients: [...state.ingredients],
        burgerArr: [...state.burgerArr]
      }
    )

  }

  return (
    <div className="App">
      <div className="List">
        <h1 style={{ color: 'white' }}>List of Ingredients</h1>
        <IngredientList
          listOfIngredients={state.ingredients}
          burgerArr={state.burgerArr}
          clickFunction={handleClick}
        />
      </div>

      <div className="List">
        <h1 style={{ color: 'white' }}>Burger</h1>
        <BurgerPane
          listOfIngredients={state.ingredients}
          burgerArr={state.burgerArr}
          clearButton={handleClear}
          handleSoloClear={handleSoloClear}
        />
      </div>
    </div>
  )

}
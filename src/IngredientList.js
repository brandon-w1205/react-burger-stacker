
import Ingredient from './Ingredient'

export default function IngredientList(props) {
    const anIngredient = props.listOfIngredients.map((ingredient, i) => {
        return (
            <button key={`key${i}`} style={{ backgroundColor: ingredient.color }} onClick={() => props.clickFunction(ingredient)}>
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
import Ingredient from './Ingredient'

export default function BurgerStack(props) {
    const summon = props.burgerArr.map((ingredient, i) => {
        return (
            <button style={{ backgroundColor: ingredient.color }} onClick={() => { props.handleSoloClear(ingredient) }}>
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
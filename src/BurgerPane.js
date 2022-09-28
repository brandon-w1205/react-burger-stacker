import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default function BurgerPane(props) {
    return (
        <div>
            {console.log(props.burgerArr)}
            <BurgerStack
                listOfIngredients={props.listOfIngredients}
                burgerArr={props.burgerArr}
                handleSoloClear={props.handleSoloClear}
            />
            <ClearBurger
                listOfIngredients={props.listOfIngredients}
                burgerArr={props.burgerArr}
                clearButton={props.clearButton}
            />
        </div>
    )

}
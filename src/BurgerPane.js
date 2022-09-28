
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default function BurgerPane(props){
        return (
            <div>
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
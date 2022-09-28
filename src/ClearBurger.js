export default function ClearBurger(props) {
    return (
        <div>
            <button onClick={() => { props.clearButton() }}>Clear</button>
        </div>
    )
}
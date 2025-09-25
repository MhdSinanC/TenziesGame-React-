/* eslint-disable react/prop-types */
export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <button
            onClick={props.hold}
            style={styles}
            className="Die"
            aria-label={`Die with value: ${props.value}, ${props.isHeld ? "held" : "not held"}`}
            aria-pressed={props.isHeld}
        >
            {props.value}
        </button>
    )
}
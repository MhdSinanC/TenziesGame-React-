import Die from './Die';
import { useState, useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ReactConfetti from 'react-confetti';

export default function App() {

    const generateAllNewDice = () => {
        return new Array(10)
            .fill(0)
            .map(() => (
                {
                    value: Math.floor(Math.random() * 6) + 1,
                    isHeld: false,
                    id: nanoid()
                }
            ));
    }

    const [dice, setDice] = useState(() => generateAllNewDice());
    const buttonRef = useRef(null);
    console.log(buttonRef);

    const gameWon = dice.every(die => die.isHeld === true) && dice.every(die => die.value === dice[0].value);

    useEffect(() => {
        if (gameWon) {
            buttonRef.current.focus();
        }
    }, [gameWon])


    const hold = (id) => {
        setDice(prevDice => prevDice.map((obj) => {
            return id === obj.id ? { ...obj, isHeld: !obj.isHeld } : obj;
        }))
    }

    const rollDice = () => {
        if (!gameWon) {
            setDice(prevDice => prevDice.map(obj => (
                obj.isHeld ?
                    obj :
                    { ...obj, value: Math.floor(Math.random() * 6) + 1 }
            )))
        } else {
            setDice(generateAllNewDice());
        }
    }


    const heldCount = dice.filter((die) => die.isHeld).length;
    
    const reset = () => {
        setDice(generateAllNewDice());
    }

    const diceElements = dice.map(dieObj => (
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
        />
    ))

    return (
        <main>
            {gameWon && <ReactConfetti recycle={false} numberOfPieces={500} gravity={0.3} />}
            <div aria-live='polite' className='sr-only'>
                {gameWon && <p>Congratulations, you won..</p>}
            </div>
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="container">
                {diceElements}
            </div>
            <div className='button-container'>
                <button onClick={rollDice} className='roll-button' ref={buttonRef}>
                    {gameWon ? "New game" : "Roll"}
                </button>

                {heldCount >= 4 && <button className='reset-button' onClick={reset}>
                    Reset
                </button>}
            </div>



        </main>
    )
}
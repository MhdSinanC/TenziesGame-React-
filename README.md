# Tenzies Game (React)

A fun and interactive version of the classic **Tenzies** dice game built using **React**. The goal of the game is to roll dice and try to get all ten dice showing the same number. Once you achieve that, you win the game and celebrate with a confetti effect! 🎉

### Features:

* **Roll the Dice**: You start by rolling all the dice.
* **Hold Dice**: Hold onto the dice that match your target number to help you win faster.
* **Reset Game**: If you want to start fresh after holding at least four dice, use the reset button.
* **Win Condition**: Once all the dice match, the "Roll" button changes to "New Game", and you get a confetti celebration! 🎊
* **Nanoid**: Used for generating unique identifiers for each die to ensure they are properly tracked during re-rolls.

---

## Demo

You can try the game here https://tenzies-game-react-beryl.vercel.app/

---

## Technologies Used:

* **React**: The front-end library used to build the game’s user interface.
* **Confetti**: Adds a festive confetti animation when you win the game.
* **Nanoid**: Generates unique IDs for dice, ensuring they are correctly tracked and re-rendered.

---

## How to Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/tenzies-game.git
   ```

2. **Install dependencies**:
   Navigate to the project folder and run:

   ```bash
   cd tenzies-game
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

4. Open `http://localhost:XXXX` in your browser to play the game!

---

## Game Rules:

* **Objective**: Roll the 10 dice and try to get all the dice showing the same number. Hold any dice that match your target number to reduce the number of dice to roll. Once all dice are the same, you win!
* **Controls**:

  * **Roll Button**: Click this button to roll all the dice.
  * **Hold Dice**: Click any die to "hold" it in place, keeping it from re-rolling.
  * **New Game**: Once you win, the "Roll" button will change to "New Game", allowing you to start again.
  * **Reset Button**: If you hold 4 or more dice, you can reset the game and start over with a new set of dice.

---

## Credits:

* **Confetti.js**: For the celebratory confetti animation.
* **Nanoid**: For generating unique IDs for dice.

---

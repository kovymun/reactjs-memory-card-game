/**HOUSE OF CARDS APP: RESULT REACT COMPONENT FOR THE CARD GAME**/
/*KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES*/
/*
Game Result React Component:
Consider the following points for the functionality and the thought process used to configure this component. 
* This component is used to render a WIN or LOSS game result.
* When the user attempts the game and the cards are "NOT MATCHED" a display text message will render "YOU LOSE", with a "red" background color on the app.
* When the user attempts the game and the cards are MATCHED, a display text message will render a flashing "WINNER", with a "green" background on the app.
* These messages are rendered conditionally using a conditional ternary operator.
*/
export default function Result({ result, resultColor }) {
  const gameResultColor =
    resultColor === "WIN"
      ? "result-win"
      : resultColor === "LOSE"
      ? "result-lose"
      : "";
  return (
    <div className={gameResultColor}>
      <h1>{result}</h1>
    </div>
  );
}

/**REFERENCES**/
/*
Conditional Rendering in React:
Researched and utilized how to use a conditional ternary operator in ReactJS, and applied the logic to this project.
Referenced the ReactJS website for this information.
https://reactjs.org/docs/conditional-rendering.html
*/

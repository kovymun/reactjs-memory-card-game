/**HOUSE OF CARDS APP: REACT CARD COMPONENT**/
/*KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES*/

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

/*
Card React Component:
How the card game works:
* When the user clicks on the "Mystery Mania" link on the Navigation bar, this routes the user to the page which holds the card game.
* There are a total of 8 cards, shuffled and dealt face down to form a grid.
* The user clicks on one card to "flip the card over" to reveal an image. The user then clicks on the second card to "flip the card over" to reveal an image.
* Once both cards are "flipped over", and the images "MATCH", the user WINS the game. Once both cards are "flipped over", and the images "DO NOT MATCH", the user LOSES the game.

The "card" is implemented using the React-bootstrap "Card" component. 

The flippedClass with the conditional ternary operator is implemented to action the flip functionality based on the conditions of the card-flip as per user click. Those conditions are
, if the "first" and "second" cards are flipped and the images "MATCH", OR,  if the "first" and "second" cards are flipped and the images "DO NOT MATCH".
See "CardGame.js" component for card selection and comparison logic.

The component makes use of the concept of "props" to pass data and state to and from the parent "CardGame.js" component. There is also an on-click event prop 
defined, allowing the user to click on a card and start the game (triggers the handleChoice function - see "CardGame.js"). As there are a MAXIMUM of 2 attempts
afforded to the user, conditional rendering is used by implementing a conditional ternary operator. Once a user completes a first attempt, the "attempts" state variable 
is incremented by 1. Once the game attempts reaches a value of 2, the "onClick" functionality is disabled.
*/

export default function GameCard({
  card,
  handleChoice,
  flipped,
  disabled,
  attempts,
  match,
}) {
  const flippedClass = flipped ? "flipped" : "";

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <Col className="card">
      <Card className={flippedClass}>
        {/* Front of the card */}
        <Card.Img
          className="front-img"
          variant="top"
          src={card.img}
          alt="various images"
        />
        {/* Back of the card */}
        <Card.Img
          className="back-img"
          variant="top"
          src="https://images.unsplash.com/photo-1657632843433-e6a8b7451ac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80"
          alt="back of the card"
          onClick={
            attempts >= 2
              ? null
              : match === "WIN"
              ? null
              : () => {
                  handleClick();
                }
          }
        />
      </Card>
    </Col>
  );
}

/*REFERENCES*/
/*
Source of images: All images used in this project are sourced from Unsplash - free high resolution images @ <https://unsplash.com/>

React-Bootstrap Card component:
Researched and utilized how to use the React-Bootstrap Card component, and it's variants and options to complete this project.
Referenced the React-bootstrap website for this information.
https://react-bootstrap.github.io/components/cards/

Destructuring props:
Researched the concept of destructuring props in React function components. Utilized this concept while configuring props for this component.
Referenced the Medium website for this information.
https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0

Conditional Rendering in React:
Researched and utilized how to use a conditional ternary operator in ReactJS, and applied the logic to this project.
Referenced the ReactJS website for this information.
https://reactjs.org/docs/conditional-rendering.html
*/

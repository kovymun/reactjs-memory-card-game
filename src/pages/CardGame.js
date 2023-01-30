/**HOUSE OF CARDS APP: CARD GAME REACT COMPONENT**/
/*KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES*/

import { useState, useEffect } from "react";
import cardArray from "../cardArray";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Result from "../components/game-components/Result";
import GameCard from "../components/game-components/Card";
import Button from "../components/buttons/GameButtons";

/*
Card Game React Component:
Thought process behind how the code was designed: 
* The front of card images are stored in the "cardArray". See "cardArray.js" file for more details.
* The user clicks on a card, and the selection is stored in the "firstChoice" state variable. The user then clicks on a second card, and the selection is 
  stored in the "secondChoice" state variable. 
* These choice selections are then compared to see if the front of card images "match or not" (see useEffect hook).
* If the "front of card images" MATCH, the "cardMatched" property in the array is set to "true", and the "match" state variable is set to "WIN".
* If the "front of card images" DO NOT MATCH, the "match" state variable is set to "LOSE".
* Conditional statements in the useEffect hook and Conditional rendering are then used to populate the actions and data in this App.
* The user is afforded 2 attempts at any given turn.
*/

export default function CardGame() {
  /*Initializing all the state variables*/
  const [cards, setCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [match, setMatch] = useState();

  /*
  Within the shuffleCards function, the front of card images, are sorted at random with every execution of this function - giving the impression that the 
  cards are being "shuffled". These shuffling of cards generate random card position images at every user attempt (almost like a lucky draw effect). 
  The "cards" state variable is then set to the data of these randomly arrange cards.
  */
  const shuffleCards = () => {
    const shuffledCards = [...cardArray, ...cardArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setFirstChoice(null);
    setSecondChoice(null);
    setAttempts(0);
    setMatch(null);
  };

  /*handleChoice function to handle the selection of the two cards and set the state variables accordingly*/
  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  /*useEffect hook used for the card match comparison*/
  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.img === secondChoice.img) {
        setCards((prevCards) => {
          setMatch("WIN");
          return prevCards.map((card) => {
            if (card.img === firstChoice.img) {
              return { ...card, cardMatched: true };
            } else {
              return card;
            }
          });
        });
        setTimeout(() => resetAttempts(), 1000);
      } else {
        setMatch("LOSE");
        setTimeout(() => resetAttempts(), 500);
      }
    }
  }, [firstChoice, secondChoice]);

  /*Function to re-set the game attempts*/
  const resetAttempts = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setAttempts((prevAttempts) => prevAttempts + 1);
    setDisabled(false);
  };

  /*useEffect hook to start a new game automatically and display these cards on the app*/
  useEffect(() => {
    shuffleCards();
  }, []);

  /*
The CardGame component renders the following components and elements:
* The Heading section of the Card Game.
* The Game action buttons section of the Card Game.
* The Game attempts count.
* The Results section of the Card Game, which conditionally renders either a "WIN" or "LOSS".
* The Card display section of the game.
  */
  return (
    <div className="card-game-window">
      {/* Heading section of the card game page */}
      <div className="card-game-heading bg-primary rounded text-white mt-4 mb-2 p-2">
        <h2>Mystery Mania Card Game</h2>
      </div>

      {/* Game button section */}
      <div className="button-container">
        <Button name="New Game" click={shuffleCards} />
        <a href="/">
          <Button name="Quit" />
        </a>
        <a href="/mystery-mania-rules">
          <Button name="Help" />
        </a>
        <p className="btn btn-primary mt-3">Attempts: {attempts}</p>
      </div>

      {/* Results section */}
      <div className="result-container text-center my-2">
        {match === "WIN" ? (
          <Result result="WINNER!" resultColor={match} />
        ) : match === "LOSE" ? (
          <Result result="YOU LOSE!" resultColor={match} />
        ) : (
          <Result result="" />
        )}
      </div>

      {/* Card Game Section */}
      <div className="card-game-container text-white mb-4">
        <Container>
          <Row lg={4} className="gy-2 gx-2">
            {cards.map((card) => (
              <GameCard
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === firstChoice ||
                  card === secondChoice ||
                  card.cardMatched
                }
                disabled={disabled}
                attempts={attempts}
                match={match}
              />
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

/**REFERENCES**/
/*
Source of images: All images used in this project are sourced from Unsplash - free high resolution images @ <https://unsplash.com/>

Conditional Rendering in React:
Researched and utilized how to use a conditional ternary operator in ReactJS, and applied the logic to this project.
Referenced the ReactJS website for this information.
https://reactjs.org/docs/conditional-rendering.html

React useState Hook:
Researched and utilized React useState Hook to define variables for dynamic data in this card game app.
Referenced the w3schools website for this information.
https://www.w3schools.com/react/react_usestate.asp

React useEffect Hook:
Researched and utilized the React useEffect Hook in this app.
Referenced the ReactJS website for this information.
https://reactjs.org/docs/hooks-effect.html

React-Bootstrap Grid system:
Researched and utilized the React-Bootstrap Grid components (Container, Row and Columns) for the card layout in this app.
Referenced the React-bootstrap website for this information.
https://react-bootstrap.github.io/layout/grid/

Adding spacing between the card items:
Researched and utilized gutter classes to add spacing between the card items.
Referenced the Bootstrap website for this information.
https://getbootstrap.com/docs/5.0/layout/gutters/#horizontal-gutters
*/

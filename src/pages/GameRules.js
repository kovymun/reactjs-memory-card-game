/**HOUSE OF CARDS APP: GAME RULES COMPONENT**/

export default function GameRules() {
  return (
    <div className="game-rules-window">
      <div className="game-rules-container bg-primary text-white p-4">
        <h4>
          Thank you for choosing HOUSE OF CARDS as your preferred online gaming
          destination!
        </h4>
        <h4 className="my-3">
          Please find the MYSTERY MANIA game rules below:
        </h4>
        <ol>
          <li>This is a card-flip matching game.</li>
          <li>
            To start the game, navigate to the game by clicking on "Mystery
            Mania" on the navigation bar or on the link listed in the rules
            below.
          </li>
          <li>
            There are a total of 8 cards, shuffled and dealt face down to form a
            grid.
          </li>
          <li>Click on one card to "flip the card over" to reveal an image.</li>
          <li>
            Click on the second card to "flip the card over" to reveal an image.
          </li>
          <li>
            Once both cards are "flipped over", and the images MATCH, you WIN
            the game.
          </li>
          <li>
            Once both cards are "flipped over", and the images DO NOT MATCH, you
            LOSE the game.
          </li>
          <li>You have a MAXIMUM of 2 attempts at any given turn.</li>
          <li>To re-start the game, start click on "New Game".</li>
          <li>The game is intended for entertainment purposes only.</li>
          <li>
            The prize for the winner is non-transferable and no cash alternative
            will be offered.
          </li>
          <li>Terms and conditions apply!</li>
          <li>
            <a href="/mystery-mania" className="text-white">
              Play Game
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

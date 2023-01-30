/**HOUSE OF CARDS APP: GAME BUTTONS COMPONENT**/
/*
Game Button React Component:
This React component is used as a template to render the following buttons on the App:
* The "New Game" button on the Mystery Mania card game page. This button triggers a function to shuffle the cards and start a "new game" for the user.
  Refer to the "CardGame.js" component for functionality.
* The "Quit" button on the "Mystery Mania" card game page. This button routes the user back to the "Home page".
* The "Help" button on the "Mystery Mania" card game page. This button routes the user to the "Mystery Mania Game Rules" page.
*/
export default function Button({ name, click }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={click}>
        {name}
      </button>
    </div>
  );
}

/**HOUSE OF CARDS APP: NAVIGATION BAR**/
/*KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES*/

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

/*
React Navbar with navigation menu component:
Researched and utilized the React Bootstrap Navbar component to create the navigation menu for this app.

The project navigation menu routes the user to the following pages on the App:
*Home: This link routes to the Home Landing Page of The App.
*Mystery Mania: This link routes to the Mystery Mania Card Game page of the App.
*Mystery Mania Game rules: This link routes to the Mystery Mania Card Game rules page of the App.
*/

export default function NavMenu() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">HOUSE OF CARDS</Navbar.Brand>

        <Nav className="me-auto ms-2">
          <Nav.Link className="nav-link me-2 text-white" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="nav-link me-2 text-white" href="/mystery-mania">
            Mystery Mania
          </Nav.Link>
          <Nav.Link
            className="nav-link me-2 text-white"
            href="/mystery-mania-rules"
          >
            Mystery Mania Game Rules
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

/**REFERENCES**/
/*
React Bootstrap Navbar with drop-down menu component:
As required in this project, a drop-down menu is configured to route to the 'home page', 'Mystery Mania game page' and 'game-rules' component pages.
Referenced the React Bootstrap documentation for this information.
https://react-bootstrap.github.io/components/navbar/#overview
*/

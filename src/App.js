/**HOUSE OF CARDS APP.JS FILE**/
/*KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import LandingPage from "../src/pages/LandingPage";
import CardGame from "./pages/CardGame";
import GameRules from "./pages/GameRules";

/*
Utilized React-Router-DOM "BrowserRouter, Routes and Route" components to create routes/paths for each page. The Route component has two props 
defined, i.e, the "path" and "element" props. Each route displays the component passed to the "element" props in the URL contained in the string passed to 
the "path" props.
*/
export default function App() {
  return (
    <div className="App">
      <NavMenu />
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<LandingPage />} />
          <Route path="/mystery-mania" element={<CardGame />} />
          <Route path="/mystery-mania-rules" element={<GameRules />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

/**REFERENCES**/
/*
React Router - BrowserRouter, Routes and Route components:
Researched and utilized the BrowserRouter, Routes and Route React-Router components to create page routes for this App.
Referenced the GeeksforGeeks website for this information.
https://www.geeksforgeeks.org/reactjs-router/
*/

import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Alert, Dropdown } from "react-bootstrap";
import Sudoku from "./sudoku";

function App() {

   /*
  
    ******  DIFFICULTY  ******

    Beginner: Find 30 numbers
    Rookie: Find 45 numbers
    Medium: Find 50 numbers
    Hard: Find 58 numbers
    Legendary: Find 65 numbers
  
  */

    useEffect(() => {
      // Start new Game with beginner difficulty
      Sudoku.newGame(30);
      setBoard(Sudoku.getSolvedBoard());
      setMatrix(Sudoku.getUnsolvedBoard());
      setCurrentDifficulty(30);
      setToFind(30);
      setLives(5);
      setShow(false);
    }, []);

    const [matrix, setMatrix] = useState([]);
    const [board, setBoard] = useState([]);
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [cords, setCords] = useState([]);
    const [toFind, setToFind] = useState();
    const [lives, setLives] = useState();
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const [guess, setGuess] = useState("danger");
    const [currentDifficulty, setCurrentDifficulty] = useState();
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Lives left: {lives} out of 5</h2>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Change difficulty
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeDifficulty(30)}>
                Beginner
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeDifficulty(45)}>
                Rookie
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeDifficulty(50)}>
                Medium
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeDifficulty(58)}>
                Hard
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeDifficulty(65)}>
                Legendary
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
    </div>
  );
}

export default App;

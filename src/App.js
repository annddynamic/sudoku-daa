import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Alert, Dropdown } from "react-bootstrap";

function App() {
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

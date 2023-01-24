import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {testy, wordFilter} from './gameLogic.js';
import './english_words.txt';


const gameLetters = ['u','m','y','p','n','r','o','l','a'];
function Square(props){
  return (
    <input className="square" type="text" maxLength={1}>
      {props.value}
    </input>
  );
}



  class centreSquare extends React.Component {
    render() {
        return (
            <input className="centreSquare" type="text" maxLength={1}></input>
        );
    }
  }

  class Submit extends React.Component {

    render() {
        return (
            <button className="submit" onClick={testy}>Submit</button>
        );
    }


  }

  class FileSelect extends React.Component {
    render(){
      return(
        <input type="file" id="file-selector" onChange={loadFile}></input>
      );
      
    }
  }

  function loadFile(event){
    document.getElementById('file-selector');
    const fileList = event.target.files;
    console.log(fileList);

    const reader = new FileReader();
    reader.readAsText(fileList[0]);
    reader.onload=function(){
      //document.getElementById('output').textContent=reader.result;
      const wordArray = reader.result.split("\n");
      console.log(reader.readyState);
      console.log(reader.result);
      console.log(wordArray[2]);
      console.log(wordArray[2].length);
      wordFilter(wordArray, gameLetters);
    }
  }
  
  class Board extends React.Component {

    
    constructor(props) {
      super(props);
      this.state = {
        letters: Array(9).fill(null),
      };
      
    }

    renderSquare(i) {
      return (
        <Square
        />
      );
    }
  
    render() {
  
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <>
            <div className="game">
              <div className="game-board">
                  <Board />
              </div>
              <div className="game-info">
                  <div>{/* status */}</div>
                  <ol>{/* TODO */}</ol>
              </div>
            </div>
            <FileSelect/>
            <Submit />
        </>
      );
    }
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);
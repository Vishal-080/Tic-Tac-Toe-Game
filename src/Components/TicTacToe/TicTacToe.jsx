import React from 'react';
import './TicTacToe.css';
import CicleIcon from '../Assets/circle.png';
import CrossIcon from '../Assets/cross.png';


const TicTacToe = () => {
  return (
    <div className='container'>
      <h1 className='title'>Tic-Tac-Toe Game in <span>React</span></h1>
      <div className='board'>

      </div>
      <button className='reset-btn'>Reset</button>
    </div>
  )
}

export default TicTacToe;
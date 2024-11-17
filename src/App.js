import './App.css';
import { useState } from 'react';

const Square = ({value, SquareClick}) => {
  return (
    <button className='square' onClick={SquareClick}>{value}</button>
  );
}

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

const handleClick = (i) => {
  const nextSquares = squares.slice();
  nextSquares[i] = "X";
  setSquares(nextSquares);
}

  return(
    <div className="content">
      <h1>Tic Tac Toe</h1>
      <div className="row">
        <Square value={squares[0]} SquareClick={() => handleClick(0)} />
        <Square value={squares[1]} SquareClick={() => handleClick(1)} />
        <Square value={squares[2]} SquareClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} SquareClick={() => handleClick(3)} />
        <Square value={squares[4]} SquareClick={() => handleClick(4)} />
        <Square value={squares[5]} SquareClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} SquareClick={() => handleClick(6)} />
        <Square value={squares[7]} SquareClick={() => handleClick(7)} />
        <Square value={squares[8]} SquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default App;

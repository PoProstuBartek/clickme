import { useState } from 'react';

const Clicker = () => {
  const [number, setNumber] = useState<number>(1)
  const maxNum : number = 10;

  const genRandom = () => {
    const rand : number = Math.floor(Math.random() * maxNum) + 1;
    setNumber(rand);
  }

  return (
    <div>
      <h1>Number is: {number}</h1>
      {number === 7
        ? <h2>YOU WIN!</h2>
        : <button onClick={genRandom}>Random number</button>
      }
    </div>
  )
}

export default Clicker;
import { useState } from 'react';
import './App.css';

const App =() => {
  const [result, setResult] = useState("");

  const handleClick = (e) =>  {
    setResult(result.concat(e.target.name));
  };

  const reset = () =>  {
    setResult('');
  };

  const resultClick = () => {
    try {
      setResult(eval(result).toString());
    } catch(error) {
      setResult('ERROR');
    } 
  };

  return (
    <div className="main">
    <div className="calc">
      <div className="calc-display">
        <input type="text" id="display" value={result} className="calc-display-input" />
      </div>
      <div className="calc-buttons">
        <table className="calc-table">
        <tbody>
          <tr className="calc-buttons-row">
          <td>
              <button onClick={reset} type="button" className="clear-btn btn btn-hover-red" id="AC">AC</button>
            </td>
            <td>
              <button onClick={handleClick} type="button" className="memory-btn btn btn-hover-red">-MEM</button>
            </td>
            <td>
              <button onClick={handleClick} type="button" className="memory-btn btn btn-hover-red">+MEM</button>
            </td>
            <td>
              <button onClick={handleClick} name="/" type="button" className=" operator btn btn-hover-orange">&divide;</button>
            </td>
          </tr>
          <tr className="calc-buttons-row">
            <td>
              <button onClick={handleClick} name="7" type="button" className="number btn-hover-green btn">7</button>
            </td>
            <td>
              <button onClick={handleClick} name="8" type="button" className="number btn-hover-green btn">8</button>
            </td>
            <td>
              <button onClick={handleClick} name="9" type="button" className="number btn-hover-green btn">9</button>
            </td>
            <td>
              <button onClick={handleClick} name="*" type="button" className="operator btn btn-hover-orange">&times;</button>
            </td>
          </tr>
          <tr className="calc-buttons-row">
            <td>
              <button onClick={handleClick} name="4" type="button" className="number btn-hover-green btn">4</button>
            </td>
            <td>
              <button onClick={handleClick} name="5" type="button" className="number btn-hover-green btn">5</button>
            </td>
            <td>
              <button onClick={handleClick} name="6" type="button" className="number btn-hover-green btn">6</button>
            </td>
            <td>
              <button onClick={handleClick} name="-" type="button" className="operator btn btn-hover-orange">&ndash;</button>
            </td>
          </tr>
          <tr className="calc-buttons-row">
            <td>
              <button onClick={handleClick} name="1" type="button" className="number btn-hover-green btn">1</button>
            </td>
            <td>
              <button onClick={handleClick} name="2" type="button" className="number btn-hover-green btn">2</button>
            </td>
            <td>
              <button onClick={handleClick} name="3" type="button" className="number btn-hover-green btn">3</button>
            </td>
            <td>
              <button onClick={handleClick} type="button" name="+" className="operator btn btn-equal btn-hover-orange">+</button>
            </td>
          </tr>
          <tr className="calc-buttons-row">
            <td colSpan="3">
              <button onClick={handleClick} type="button" name="0" className="number btn-hover-green btn btn-long">0</button>
            </td>
            <td>
              <button onClick={resultClick} type="button" className="operator btn btn-equal btn-hover-orange" id="result">=</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export default App;

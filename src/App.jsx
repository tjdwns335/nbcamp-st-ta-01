import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { minusN, plusN } from "./redux/modules/calculator";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.calculator.number);
  console.log(number);
  const [inputNumber, setInputNumber] = useState(0);

  const changeHandler = (e) => {
    setInputNumber(e.target.value);
  }
  const addHandler = () => {
    dispatch(plusN(inputNumber));
  }

  const minusHandler = () => {
    dispatch(minusN(inputNumber));
  }

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" value={inputNumber} onChange={changeHandler} />
        만큼을
        <button onClick={addHandler}>더할게요</button>
        <button onClick={minusHandler}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{number}</p>
      </div>
    </div>
  );
}

export default App;

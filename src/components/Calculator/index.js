import {useState, useRef} from 'react';
import {add} from '../../utils';

const Calculator = () => {  

  const [result, setResult] = useState(0);
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  const calculate = ()=>{
    try{
      setResult( add(inputRef?.current?.value) );
      setError('');
    }
    catch(e){
      setResult(0);
      setError(e.message);
    }
  };

  return (
    <>
      <div>
        <input ref={inputRef} type="text"/>
        <button onClick={calculate}>Calculate</button>
      </div>
      <div>
        <p>Result : {result}</p>
        {error && <p>Error: {error}</p>}
      </div>
    </>
  );
}

export default Calculator;
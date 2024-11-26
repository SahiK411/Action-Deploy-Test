import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [shortFlag, setShortFlag] = useState(false);
  const [longFlag, setLongFlag] = useState(false);

  function onNameChange(e){
    setName(e.target.value);
  }

  function NameResponse({sF, lF}){
    if(sF){
      return (<p id='pageShort' data-testid="pageShort">What a short name!</p>);
    }
    if(lF){
      return (<p id='pageLong'data-testid="pageLong">What a long name!</p>);
    }
    return null;
  }

  function validateName(){
    if(name.length < 5){
      setShortFlag(true)
      setLongFlag(false)
    }
    else{
      setShortFlag(false)
      setLongFlag(true)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome!
        </p>
        <p>
          Por favor ingresa tu nombre
        </p>
      </header>
      <div id='pageBody' className='App-body'>
        <label for="textInput">Your Name</label>
        <input type="text" id='textInput' onChange={onNameChange} data-testid="textInput"/>
        <input type='button' onClick={validateName} value="Submit" className='input-button' data-testid="inputButton"/>
        <NameResponse sF={shortFlag} lF={longFlag}/>
      </div>
    </div>
  );
}

export default App;

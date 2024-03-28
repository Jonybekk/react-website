import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import {useState} from 'react'


function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  );
}

function ColorSwitch({ onChangeColor }) {
  return (
    <button onClick={а => {
      а.stopPropagation();
      onChangeColor();
    }}>Change Color</button>
  );
}

function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <Button onClick={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}

function UploadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}>
      Upload Image
    </Button>
  );
}



export function Counter(){
  const [number, setNumber] = useState(1); // state variable

  function addNumber(){
    setNumber(number + 1)
  }

  function reduceNumber(){
    if(number > 1){
      setNumber(number - 1)
    }
  }

  return(
    <div>
        <button onClick={reduceNumber}>-</button>
        {number}
        <button onClick={addNumber}>+</button>
    </div>
  )
}




function App() {
  // event handler
  function handleClick() {
    alert("Hello")
  }

  return (
    <div className="App">

      {/* <form onSubmit={(a) => {
        a.preventDefault();
        alert("Submitted")
      }}>
        <input type='text' name="username"/>
        <button type='submit'>Submit</button>
      </form>

      <div onClick={() => alert("main div")}>
        <div className="Toolbar" onClick={(a) => {
          a.stopPropagation();
          alert('You clicked on the toolbar!');
        }}>
          <button 
            onClick={(a) => {
              a.stopPropagation();
              alert('Playing!');
            }}> Play Movie </button>
          <button 
            onClick={(a) => {
              a.stopPropagation();
              alert('Uploading!')
            }}> Upload Image </button>
        </div>
      </div> */}
      

      {/* <PlayButton movieName="Kiki's Delivery Service"/>
      <UploadButton /> */}
      {/* <button onClick={handleClick}>Hello</button>

      <button
       onClick={function handleClick() {
        alert("Hi")
        }}>Hi</button>

      <button onClick={() => alert("Hey")}>Hey</button>

      <AlertButton message={"Uploading..."}><h1>Upload Image</h1></AlertButton> */}
      {/* <LightSwitch />
      <ColorSwitch /> */}
      
      <Gallery />
      <Counter />
      

    </div>
  );
}

export default App;


// Hw
// 1
export function Form() {
  const [firstName, SetFirstName] = useState("")
  const [lastName, SetLastName] = useState("")

  function handleFirstNameChange(fname) {
    SetFirstName(fname.target.value);
  }

  function handleLastNameChange(lname) {
    SetLastName(lname.target.value);
  }

  function handleReset() {
    SetFirstName(firstName = '');
    SetLastName(lastName = '');
  }

  return (
    <form onSubmit={e => 
      e.preventDefault()
    }>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input 
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onCLick={handleReset}>Reset</button>
    </form>
  );
}

// 2

export function Feedback() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    // eslint-disable-next-line
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}


// 3
export function FeedbackForm() {
  function handleClick() {
    const FirstName = prompt('What is your name?');
    alert(`Hello, ${FirstName}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}
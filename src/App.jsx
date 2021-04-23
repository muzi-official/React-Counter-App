import React, { useState } from 'react';
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const  App = () => {

const [num, setNum] = useState(0);


const incNum = () => {
setNum(num+1)
};


const decNum = () => {
  if (num > 0 ) {
    setNum(num-1)
  } else{
    alert("Sorry Then Number Is Zero")
  }
}

  return (
<>

<div className="container">
<h1> {num} </h1>
<button onClick={incNum}><AddIcon/></button>
<button onClick={decNum}><RemoveIcon/></button>
</div>

</>
  );
}

export default App;

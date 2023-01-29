import { useState } from 'react';
import './App.css';
import ClassComponent from "./components/ClassComponent";
import FucntionalComponent  from './components/FucntionalComponent';
function App() {

  const Company = "Meri Company";
  const [name,setname] = useState("Devtown");
  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponent />
      <br />
      <h1>Function Component</h1>
    
      <FucntionalComponent name={name} age={42} company={Company} setname = {setname} />
    </div>
  );
}

export default App;

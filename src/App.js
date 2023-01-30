import { useState } from 'react';
import './App.css';
import ClassComponent from "./pages/ClassComponent";
import FucntionalComponent from './pages/FucntionalComponent';
import{Routes,Route} from 'react-router-dom'


function App() {
  const Company = "Meri Company";
  const [name,setname] = useState("Devtown");
  return (
    <Routes>
      <Route path="/" element={<ClassComponent />} />
      <Route path="/function"
        element={
        <FucntionalComponent
        name={name}
        age={42}
        company={Company}
        setname={setname}
      />} />
   </Routes>
  );
}

export default App;


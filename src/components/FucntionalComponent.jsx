import React ,{ useState }  from "react";


const FucntionalComponent = (props) => {
    
    const [count, setCount] = useState(0);
    const [ChangeName, setChangeName] = useState("");
   //we can also use simple functn for getted let by the error
    const substraction = () => setCount(count - 1);

    return (
        <div>
            <p>This is Functional Based Component</p>
            <button onClick={() => setCount(count + 1)}> Click here to add 1 </button>
            <button onClick={substraction}> Click here to substract 1 </button>
            <button onClick={() => setCount(count * 2)}> Click here to multiply by 2 </button>
            <button onClick={() => setCount(count / 2)}> Click here to divide by 2 </button>
            <h1>{count}</h1>
            <h1>My name is {props.name} & My age is {props.age} & i Am working In {props.company}</h1>
            <input onChange={(e) => setChangeName(e.target.value)} />
            <button onClick={() => props.setname(ChangeName)}> Click here to change name </button>
          
        </div>
    )
}
export default FucntionalComponent;
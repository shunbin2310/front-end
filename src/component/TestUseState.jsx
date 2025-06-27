import { useState } from "react";

function TestUseState(){
    const [count, setCount] = useState(10);// useSatet(10) set initial value
    const [name, setName] = useState('');

    //function
    const increase = () => {
        setCount(count + 10);
    };

    return(
        <>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={increase}>Add</button>
            </div>

            <br></br>

            <div>
                <input value={name} onChange={e => setName(e.target.value)} />
                <p>Your name is: {name}</p>
            </div>
        </>
    );
}

export default TestUseState
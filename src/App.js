import './App.css';
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);


    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>push</button>
        </div>
    );
}

export default App;

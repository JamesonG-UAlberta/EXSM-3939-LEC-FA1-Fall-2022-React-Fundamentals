import {useState} from 'react';
import './ExampleList.css';

function ExampleList() {

    // const ['variable name', 'method name to set the variable'] = useState('initial value');
    // State variables automatically trigger refreshes of any elements that reference them upon a change. 
    // React will NOT refresh elements automatically that are reading "normal" variables.
    // State changes happen asynchronously, meaning if you reference the old value of a state variable improperly, you can wind up displaying erroneous data.
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    return (
        <div id="exampleList" className="exampleComponent">
            <ul>
                {/* Any time you use a map function to return a JSX snippet, ensure to include a key attribute on the root of the returned JSX, which allows React to identify which copy pairs to which list item. */}
                {list.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
            {/* When binding a input to a state variable, it's important to not only bind the value, but also the onChange so that things get updated properly. */}
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <button onClick={(e)=>{setList((oldList) => [...oldList, input]);setInput("");}}>Add Item</button>
        </div>
    );
}

export default ExampleList;

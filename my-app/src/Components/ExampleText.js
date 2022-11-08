import {useState} from 'react';
import './ExampleText.css';

function ExampleText() {

    // const ['variable name', 'method name to set the variable'] = useState('initial value');
    // State variables automatically trigger refreshes of any elements that reference them upon a change. 
    // React will NOT refresh elements automatically that are reading "normal" variables.
    // State changes happen asynchronously, meaning if you reference the old value of a state variable improperly, you can wind up displaying erroneous data.
    const [input, setInput] = useState("");

    return (
        <div id="exampleText" className="exampleComponent">
            <p>The text entered is: {input}!</p>
            {/* When binding a input to a state variable, it's important to not only bind the value, but also the onChange so that things get updated properly. */}
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
        </div>
    );
}

export default ExampleText;

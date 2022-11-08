import {useState} from 'react';

function MyComponent() {

    // const ['variable name', 'method name to set the variable'] = useState('initial value');
    // State variables automatically trigger refreshes of any elements that reference them upon a change. 
    // React will NOT refresh elements automatically that are reading "normal" variables.
    // State changes happen asynchronously, meaning if you reference the old value of a state variable improperly, you can wind up displaying erroneous data.
    const [counter, setCounter] = useState(1);

    return (
        <div className="exampleComponent">
            <p>The counter value is currently {counter}!</p>
            {/* Similar to vanilla JavaScript, event listeners can be (and typically are) declared inline with the element to which they are attached. */}
            {/* If you want to update a state variable to something based on the old value, ensure to pass it into the update method as an argument. */}
            <button onClick={() => {setCounter((oldCounter) => oldCounter+1)}}>Increment the Counter</button>
        </div>
    );
}

export default MyComponent;

import {useState, useRef} from 'react';

function ExampleReference() {
    const [counterTotal, setCounterTotal] = useState(0);
    const inputFieldReference = useRef(null);

    // Equivalent of class-based Render().
    return (
        <div id="exampleCounter" className="exampleComponent">
            <input id="testID" type="text" ref={inputFieldReference} />
            <button onClick={() => {document.getElementById("testID").focus();}}>Focus</button>
        </div>
    );
}

export default ExampleReference;

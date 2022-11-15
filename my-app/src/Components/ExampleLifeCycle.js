import {useEffect, useState} from 'react';

function ExampleLifeCycle() {
    const [counterTotal, setCounterTotal] = useState(0);

    const [counterOne, setCounterOne] = useState(1);
    // With no second parameter, the effect hook updates every time any state updates.
    // Fires any time the state changes (one or two).
    // Equivalent of class-based ComponentDidUpdate(), unsensitive to which states change.
    useEffect(() => {
        console.log("No second parameter.");
    });
    // With an empty array, the effect hook updates only when the component first mounts.
    // Fires only on component mounting.
    // Equivalent of class-based ComponentDidMount().
    useEffect(() => {
        console.log("Empty array parameter.");

        // Fires only on component unmounting.
        // Equivalent of class-based ComponentWillUnmount().
        return () => {
            console.log("Return of empty array parameter.");
        };
    }, []);
    // With a array containing state properties, the effect hook updates when the listed state props update.
    // Fires only when the state listed changes (counter one).
    // Equivalent of class-based ComponentDidUpdate(), sensitive to which states change.
    useEffect(() => {
        console.log("Counter one parameter.");
    }, [counterOne]);

    const [counterTwo, setCounterTwo] = useState(1);
    useEffect(() => {
        console.log("Counter two parameter.");
    }, [counterTwo]);


    useEffect(() => {
        console.log("Counter one and two parameter.");
        setCounterTotal((old) => old+1);
    }, [counterOne, counterTwo]);

    // Equivalent of class-based Render().
    return (
        <div id="exampleCounter" className="exampleComponent">
            <p>Counter 1: {counterOne}! Counter 2: {counterTwo}!</p>
            <p>Total: {counterTotal}</p>
            {/* Similar to vanilla JavaScript, event listeners can be (and typically are) declared inline with the element to which they are attached. */}
            {/* If you want to update a state variable to something based on the old value, ensure to pass it into the update method as an argument. */}
            <button onClick={() => {setCounterOne((oldCounter) => oldCounter+1)}}>Increment Counter 1</button>
            <button onClick={() => {setCounterTwo((oldCounter) => oldCounter+1)}}>Increment Counter 2</button>
            
        </div>
    );
}

export default ExampleLifeCycle;

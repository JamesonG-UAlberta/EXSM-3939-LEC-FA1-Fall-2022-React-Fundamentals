/*
import React from 'react';

class MyComponent extends React.Component {

    render() {
        return <div>
            <p>Hello, World!</p>
        </div>;
    }
}
*/


function MyComponent() {
    let myVariable = "Everyone";
    return (
        <div className="exampleComponent">
            <p>Hello, {myVariable}!</p>
        </div>
    );
}

export default MyComponent;

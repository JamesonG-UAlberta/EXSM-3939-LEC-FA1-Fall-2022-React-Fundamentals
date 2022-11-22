import {useState} from 'react';
import './ExampleList.css';

function ExamplePropMap(props) {
    return (
        <div id="examplePropMap" >
            <h2>{props.valueToDisplay}</h2>
            <p>Length: {String(props.valueToDisplay).length}</p>
        </div>
    );
}

export default ExamplePropMap;

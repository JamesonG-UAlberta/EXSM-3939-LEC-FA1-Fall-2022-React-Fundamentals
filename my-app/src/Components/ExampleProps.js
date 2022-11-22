import {useState} from 'react';
import './ExampleList.css';

function ExampleProps(props) {
    return (
        <div id="exampleProps" className="exampleComponent">
            <p>Props example.</p>
            <p>{props.example??"Undefined"}</p>

            <ul>
                {props.array?.map((x,y) => <li key={y}>{x}</li>)}
            </ul>
        </div>
    );
}

export default ExampleProps;

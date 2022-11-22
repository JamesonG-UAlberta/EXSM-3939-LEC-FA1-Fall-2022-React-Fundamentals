import {useState} from 'react';
import './ExampleList.css';
import ExamplePropMap from './ExamplePropMap';

function ExampleProps(props) {
    return (
        <div id="exampleProps" className="exampleComponent">
            <p>Props example.</p>
            <p>{props.example??"Undefined"}</p>


                {props.array?.map((x,y) => <ExamplePropMap key={y} valueToDisplay={x} />)}

        </div>
    );
}

export default ExampleProps;

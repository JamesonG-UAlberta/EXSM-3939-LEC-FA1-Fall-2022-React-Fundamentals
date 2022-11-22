import {useState} from 'react';

function ExampleCallback(props) {
    return (
        <div id="exampleCallback" className='exampleComponent'>
            <button onClick={props.callback}>Call the Callback</button>
        </div>
    );
}

export default ExampleCallback;

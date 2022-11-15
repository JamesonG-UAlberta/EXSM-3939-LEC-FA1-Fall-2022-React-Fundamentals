import React from 'react';
import './ExampleList.css';

class ExampleListClass extends React.Component {

    constructor(props) {
        super(props);
        // With class-based, we initalize state in the constructor as a single object of many properties, rather than individual hooks to useState().
        this.state = {
            input: "",
            list: []
        };
    }

    render() {
        return (
            <div id="exampleList" className="exampleComponent">
                <ul>
                    {/* Any time you use a map function to return a JSX snippet, ensure to include a key attribute on the root of the returned JSX, which allows React to identify which copy pairs to which list item. */}
                    {/* Any references to the state are prefixed by this.state. as we are referencing a property of the state object. */}
                    {this.state.list.map((x, i) => <li key={i}>{x}</li>)}
                </ul>
                {/* When binding a input to a state variable, it's important to not only bind the value, but also the onChange so that things get updated properly. */}
                {/* Any changes to state are made using this.setState, and passing in a new object to be merged into the state object. Any properties with the same names are overwritten. Any properties not included in the new state object are left alone in the original state. */}
                <input type="text" value={this.state.input} onChange={(e) => { this.setState({input: e.target.value}) }} />
                <button onClick={(e) => {
                    {/* Multiple changes to state can be made at the same time this way, by setting multiple properties in the new state object to be merged. */}
                    this.setState((oldState) => { return {
                        list: [...oldState.list, this.state.input],
                        input: ""
                    }; });
                }}>Add Item</button>
            </div>
        );
    }
}

export default ExampleListClass;

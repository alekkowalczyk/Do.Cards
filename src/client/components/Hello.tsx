import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {

    clickedButtonTest() {
        alert('hi!hello!');
    }

    render() {
        return  <div>
                    <h1>Hello from {this.props.compiler} and {this.props.framework}!!!!</h1>
                    <button onClick={this.clickedButtonTest}>Test</button>
                </div>;
    }
}
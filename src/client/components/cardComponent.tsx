import * as React from "react";
import * as _ from "lodash";

export interface ICardComponentProps {
    title: string;
    titleChanged: (newTitle: string) => void;
    remove: () => void;
}

export class CardComponent extends React.Component<ICardComponentProps, {}> {
    constructor() {
        super();
        this.callTitleChangedProps = _.debounce(this.callTitleChangedProps, 1000);
    }

    public render() {
        return  <div style={{border: "solid 1px black"}}>
                    <p>Card</p>
                    <input value={this.props.title} onChange={this.titleChanged.bind(this)}/>
                    <button onClick={this.props.remove}>X</button>
                </div>;
    }

    private callTitleChangedProps(str: string): void {
        this.props.titleChanged(str);
    }

    private titleChanged(e: React.SyntheticEvent<string>): void {
        this.callTitleChangedProps((e.target as any).value);
    }
}

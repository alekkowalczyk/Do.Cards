import * as React from "react";

export interface ICardComponentProps {
    title: string;
    titleChanged: (newTitle: string) => void;
    remove: () => void;
}

export class CardComponent extends React.Component<ICardComponentProps, {}> {
    constructor() {
        super();
    }

    public render() {
        return  <div style={{border: "solid 1px black", margin: "5px", padding: "5px"}}>
                    <div>Card</div>
                    <input value={this.props.title} onChange={this.titleChanged.bind(this)}/>
                    <button onClick={this.props.remove}>X</button>
                </div>;
    }

    private titleChanged(e: React.SyntheticEvent<string>): void {
        this.props.titleChanged((e.target as any).value);
    }
}

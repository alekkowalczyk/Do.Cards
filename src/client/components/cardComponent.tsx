import * as React from "react";
import { CardModel } from "../model/card/cardModel";

export interface ICardComponentProps {
    title: string;
    remove: () => void;
}

export class CardComponent extends React.Component<ICardComponentProps, {}> {

    public render() {
        return  <div style={{border: "solid 1px black"}}>
                    <h3>{this.props.title}</h3>
                    <button onClick={this.props.remove}>X</button>
                </div>;
    }
}

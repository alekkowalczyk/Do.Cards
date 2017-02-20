import * as React from "react";
import { ICardModel } from "../model";
import CardContainer from "../containers/CardContainer";

export interface ICardComponentProps {
    title: string;
    subCards: ICardModel[];
    titleChanged: (newTitle: string) => void;
    remove: () => void;
    addSubCard: () => void;
}

export class CardComponent extends React.Component<ICardComponentProps, {}> {
    constructor() {
        super();
    }

    public render() {
        const subCards: React.HTMLProps<HTMLDivElement> = this.props.subCards.map((c) =>
                                c &&
                                <li><CardContainer  key={c.id}
                                                card={c}
                                            /></li>
                            );
        return  <div style={{border: "solid 1px black", margin: "5px", padding: "5px"}}>
                    <div>Card</div>
                    <input value={this.props.title} onChange={this.titleChanged.bind(this)}/>
                    <button onClick={this.props.remove}>X</button>
                    <ul>{subCards}</ul>
                    <button onClick={this.props.addSubCard}>Add sub card</button>
                </div>;
    }

    private titleChanged(e: React.SyntheticEvent<string>): void {
        this.props.titleChanged((e.target as any).value);
    }
}

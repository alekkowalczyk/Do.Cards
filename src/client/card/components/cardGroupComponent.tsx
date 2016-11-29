import * as React from "react";
import { ICardModel } from "../model/cardModel";
import CardContainer from "../containers/CardContainer";

export interface ICardGroupComponentProps {
    cards: ICardModel[];
    title: string;
    titleChanged: (newTitle: string) => void;
    addEmptyCard: () => void;
    remove: () => void;
}

export class CardGroupComponent extends React.Component<ICardGroupComponentProps, {}> {

    public render() {
        return  <div style={{border: "solid 1px gray", margin: "5px", padding: "5px"}}>
                    <div>Card group</div>
                    <div>
                        <input value={this.props.title} onChange={this.titleChanged.bind(this)}/>
                        <button onClick={this.props.remove}>X</button>
                    </div>
                    {
                        this.props.cards.map((c) =>
                            c &&
                            <CardContainer  key={c.id}
                                            card={c}
                                           />
                        )
                    }
                    <button onClick={this.props.addEmptyCard}>Add card</button>
                </div>;
    }

    private titleChanged(e: React.SyntheticEvent<string>): void {
        this.props.titleChanged((e.target as any).value);
    }
}

import * as React from "react";
import { List } from "immutable";
import { CardModel } from "../model/card/cardModel";
import { CardComponent } from "./CardComponent";

export interface ICardGroupComponentProps {
    cards: List<CardModel>;
    addEmptyCard: () => void;
    removeCard: (card: CardModel) => void;
    editCardTitle: (card: CardModel, newTitle: string) => void;
}

export class CardGroupComponent extends React.Component<ICardGroupComponentProps, {}> {

    public render() {
        return  <div style={{border: "solid 1px gray"}}>
                    {
                        this.props.cards.map((c) =>
                            c &&
                            <CardComponent title={c.title}
                                           titleChanged={(newTitle) => this.props.editCardTitle(c, newTitle)}
                                           remove={() => this.props.removeCard(c)} />
                        )
                    }
                    <button onClick={this.props.addEmptyCard}>Add</button>
                </div>;
    }
}

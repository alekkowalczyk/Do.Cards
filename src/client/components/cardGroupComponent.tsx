import * as React from "react";
import { List } from "immutable";
import { CardState } from "../state/card/cardState";
import { CardComponent } from "./CardComponent";

export interface ICardGroupComponentProps {
    cards: List<CardState>;
    addEmptyCard: () => void;
    removeCard: (card: CardState) => void;
    editCardTitle: (card: CardState, newTitle: string) => void;
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

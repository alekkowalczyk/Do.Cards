import * as React from "react";
import { ICardModel } from "../model/card/cardModel";
import { CardComponent } from "./CardComponent";

export interface ICardGroupComponentProps {
    cards: ICardModel[];
    addEmptyCard: () => void;
    removeCard: (card: ICardModel) => void;
    editCardTitle: (card: ICardModel, newTitle: string) => void;
}

export class CardGroupComponent extends React.Component<ICardGroupComponentProps, {}> {

    public render() {
        return  <div style={{border: "solid 1px gray"}}>
                    {
                        this.props.cards.map((c) =>
                            c &&
                            <CardComponent key={c.id}
                                           title={c.title}
                                           titleChanged={(newTitle) => this.props.editCardTitle(c, newTitle)}
                                           remove={() => this.props.removeCard(c)} />
                        )
                    }
                    <button onClick={this.props.addEmptyCard}>Add</button>
                </div>;
    }
}

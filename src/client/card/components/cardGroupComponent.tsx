import * as React from "react";
import { ICardModel } from "../model/cardModel";
import CardContainer from "../containers/CardContainer";

export interface ICardGroupComponentProps {
    cards: ICardModel[];
    addEmptyCard: () => void;
}

export class CardGroupComponent extends React.Component<ICardGroupComponentProps, {}> {

    public render() {
        return  <div style={{border: "solid 1px gray"}}>
                    {
                        this.props.cards.map((c) =>
                            c &&
                            <CardContainer  key={c.id}
                                            cardId={c.id}
                                           />
                        )
                    }
                    <button onClick={this.props.addEmptyCard}>Add</button>
                </div>;
    }
}

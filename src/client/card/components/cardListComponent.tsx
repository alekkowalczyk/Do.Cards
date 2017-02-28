import * as React from "react";
import { ICardModel } from "../model/cardModel";
import CardContainer from "../containers/CardContainer";

export interface ICardListComponentProps {
    cards: ICardModel[];
    isSubCardsList: boolean;
}

export class CardListComponent extends React.Component<ICardListComponentProps, {}> {
    public render() {
        const { cards, isSubCardsList } = this.props;
        return  <div className={isSubCardsList ? "sub-cards-list" : "root-card-list"}>
                        {
                            cards.map((c, idx) =>
                                c &&
                                <CardContainer  key={idx}
                                                card={c}
                                            />
                            )
                        }
                    </div>;
    }
}

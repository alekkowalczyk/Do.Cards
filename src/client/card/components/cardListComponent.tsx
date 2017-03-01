import * as React from "react";
import { ICardProps } from "../model/cardModel";
import CardContainer from "../containers/CardContainer";
import { InterCardSpaceComponent } from "./interCardSpaceComponent";

export interface ICardListComponentProps {
    cards: ICardProps[];
    isSubCardsList: boolean;
    displayEmptyCardAbove: (card: ICardProps | null) => void;
}

export class CardListComponent extends React.Component<ICardListComponentProps, {}> {
    public render() {
        const { cards, isSubCardsList } = this.props;
        const getInterCardSpace = (c: ICardProps | null, isEmptyCard: boolean) => {
                let plusSign = "+";
                if (c && c.ui.displayEmptyCardAbove) {
                    plusSign = "";
                } else if (isEmptyCard) {
                    plusSign = "*";
                }
                return <InterCardSpaceComponent isDisplayingEmptyCardAbove={c !== null && c.ui.displayEmptyCardAbove === true}
                                                displayEmptyCardAbove={() => this.props.displayEmptyCardAbove(c)}
                                                isEmptyCardBelow={isEmptyCard} />;
        };
        const someCardHasEmptyAbove = cards.some(c => c.ui.displayEmptyCardAbove === true);
        return  <div className={isSubCardsList ? "sub-cards-list" : "root-card-list"}>
                        {
                            cards.map((c, idx) => {
                                const isEmptyCard = c.id.id === "-1";
                                return c &&
                                <div key={idx}>
                                    {getInterCardSpace(c, isEmptyCard)}
                                    <CardContainer card={c} />
                                </div>;
                            })
                        }
                        {someCardHasEmptyAbove && getInterCardSpace(null, false)}
                    </div>;
    }
}

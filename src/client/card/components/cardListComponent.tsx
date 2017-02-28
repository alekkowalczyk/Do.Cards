import * as React from "react";
import { ICardProps } from "../model/cardModel";
import CardContainer from "../containers/CardContainer";

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
                return <div className="inter-card-space">
                                        <div className="plus-container"
                                            onClick={() => this.props.displayEmptyCardAbove(c)}
                                            >
                                            <div className="plus-sign">{plusSign}</div>
                                        </div>
                                        <div className="card-seperator-container">
                                            <div className="card-seperator">
                                            </div>
                                        </div>
                                    </div>;
        };
        const someCardHasEmptyAbove = cards.some(c => c.ui.displayEmptyCardAbove === true);
        return  <div className={isSubCardsList ? "sub-cards-list" : "root-card-list"}>
                        {
                            cards.map((c, idx) => {
                                const isEmptyCard = c.id.id === "-1";
                                return c &&
                                <div key={idx}>
                                    {getInterCardSpace(c, isEmptyCard)}
                                    <div className="card-host">
                                        { !isEmptyCard ?
                                            <div className="card-grabber">
                                                <div className="grabber">
                                                    <div className="grabber-sign">
                                                    =
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className="empty-card-grabber">
                                            </div>
                                        }
                                        <CardContainer
                                                card={c}
                                            />
                                    </div>
                                </div>;
                            })
                        }
                        {someCardHasEmptyAbove && getInterCardSpace(null, false)}
                    </div>;
    }
}

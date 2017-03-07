import * as React from "react";
import { ICardProps } from "../model/cardModel";
import { IHoveringCard } from "../model";
import CardContainer from "../containers/cardContainer";
import { InterCardSpaceComponent } from "./interCardSpaceComponent";

export interface ICardListComponentProps {
    cards: ICardProps[];
    hoveringOptions: IHoveringCard;
    hoveringAction: (options?: IHoveringCard) => void;
    isSubCardsList: boolean;
    displayEmptyCardAbove: (card: ICardProps | undefined) => void;
}

interface ICardListDropConnect{
    connectDropTarget?: (p: any) => any;
}

export class CardListComponent extends React.Component<ICardListComponentProps & ICardListDropConnect, {}> {

    public render() {
        const { cards, isSubCardsList } = this.props;
        const connectDropTarget = this.props.connectDropTarget || ((p) => p);
        const getInterCardSpace = (c: ICardProps | undefined, isEmptyCard: boolean) => {
                let plusSign = "+";
                if (c && c.ui.displayEmptyCardAbove) {
                    plusSign = "";
                } else if (isEmptyCard) {
                    plusSign = "*";
                }
                return <InterCardSpaceComponent
                                                cardBelow={c}
                                                isDisplayingEmptyCardAbove={c !== undefined && c.ui.displayEmptyCardAbove === true}
                                                displayEmptyCardAbove={() => this.props.displayEmptyCardAbove(c)}
                                                isEmptyCardBelow={isEmptyCard} />;
        };
        const someCardHasEmptyAbove = cards.some(c => c.ui.displayEmptyCardAbove === true);
        return  connectDropTarget(<div className={isSubCardsList ? "sub-cards-list" : "root-card-list"}>
                        {
                            cards.map((c, idx) => {
                                const isEmptyCard = c.id.id === "-1";
                                const { hoveringOver } = this.props.hoveringOptions;
                                const isHoverOverEmptyCard = hoveringOver
                                        && hoveringOver.id.id === "-1"
                                        && c.id.id === "-1"
                                        && hoveringOver.id.parentId === c.id.parentId
                                        && hoveringOver.id.parentType === c.id.parentType;
                                const hoverAbove = (hoveringOver === c
                                        && this.props.hoveringOptions.hoverType === "TOP")
                                        || (isHoverOverEmptyCard);
                                const hoverBelow = hoveringOver === c
                                        && this.props.hoveringOptions.hoverType === "BOTTOM";
                                const hoveringCard = this.props.hoveringOptions.hoveringCard;
                                return c &&
                                <div key={idx}>
                                    {
                                        hoveringCard && (hoverAbove) &&
                                        <div>
                                            {getInterCardSpace(c, isEmptyCard)}
                                            <CardContainer card={hoveringCard} />
                                        </div>
                                    }
                                    {
                                        hoveringCard !== c &&
                                        <div>
                                            {getInterCardSpace(c, isEmptyCard)}
                                            <CardContainer card={c} />
                                        </div>
                                    }
                                    {
                                        hoverBelow && hoveringCard &&
                                        <div>
                                            {getInterCardSpace(c, isEmptyCard)}
                                            <CardContainer card={hoveringCard} />
                                        </div>
                                    }
                                </div>;
                            })
                        }
                        {someCardHasEmptyAbove && getInterCardSpace(undefined, false)}
                </div>);
    }
}

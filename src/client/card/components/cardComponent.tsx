import * as React from "react";
import { ICardProps, CardParent_Card } from "../model";
import CardContainer from "../containers/CardContainer";
import CardListContainer from "../containers/cardListContainer";

export interface ICardComponentProps {
    card: ICardProps;
    displayEmptySubCard: boolean;
    titleChanged: (newTitle: string) => void;
    remove: () => void;
    displayEmptySubCardAction: () => void;
}

export class CardComponent extends React.Component<ICardComponentProps, {}> {
    constructor() {
        super();
    }

    public render(): any {
        const { card } = this.props;
        const isEmptyCard = card.id.id === "-1";
        const placeholder = isEmptyCard ? "Type to add new card..." : "";
        return  <div className="card-host">
                    { !isEmptyCard ?
                        <div className="card-grabber">
                            <div className="grabber">
                                <div className="grabber-sign">
                                ≡
                                </div>
                            </div>
                        </div>
                        :
                        <div className="empty-card-grabber">
                        </div>
                    }
                    <div className="card-element">
                            <div>
                                <input value={card.title} onChange={this.titleChanged.bind(this)} placeholder={placeholder}/>
                                <button onClick={this.props.remove} className="close-button">✖</button>
                            </div>
                            <CardListContainer parentId={card.id.id}
                                        parentType={CardParent_Card}
                                        displayEmptyCard={this.props.displayEmptySubCard}
                                        />
                            {   !isEmptyCard &&
                                <button onClick={this.props.displayEmptySubCardAction}><span className="plus">+</span>sub card</button>
                            }
                    </div>
                </div>;
    }

    private titleChanged(e: React.SyntheticEvent<string>): void {
        this.props.titleChanged((e.target as any).value);
    }
}

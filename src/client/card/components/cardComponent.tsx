import * as React from "react";
import { ICardModel, CardParent_Card } from "../model";
import CardContainer from "../containers/CardContainer";
import CardListContainer from "../containers/cardListContainer";

export interface ICardComponentProps {
    card: ICardModel;
    displayAddSubCard: boolean;
    titleChanged: (newTitle: string) => void;
    remove: () => void;
    addSubCard: () => void;
}

export class CardComponent extends React.Component<ICardComponentProps, {}> {
    constructor() {
        super();
    }

    public render(): any {
        const { card } = this.props;
        const isEmptyCard = card.id.id === "-1";
        const placeholder = isEmptyCard ? "Type to add new card..." : "";
        return  <div>
                    <div className="inter-card-space">
                        <div className="plus-container">
                            <div className="plus-sign">
                            {
                                !isEmptyCard ?
                                "+" : "*"
                            }
                            </div>
                        </div>
                        <div className="card-seperator-container">
                            <div className="card-seperator">
                            
                            </div>
                        </div>
                    </div>
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
                        <div className="card-element">
                            <div>
                                <input value={card.title} onChange={this.titleChanged.bind(this)} placeholder={placeholder}/>
                                <button onClick={this.props.remove} className="close-button">✖</button>
                            </div>
                            <CardListContainer parentId={card.id.id}
                                        parentType={CardParent_Card}
                                        displayEmptyCard={this.props.displayAddSubCard}
                                        />
                            {   !isEmptyCard &&
                                <button onClick={this.props.addSubCard}><span className="plus">+</span>sub card</button>
                            }
                        </div>
                    </div>
                </div>;
    }

    private titleChanged(e: React.SyntheticEvent<string>): void {
        this.props.titleChanged((e.target as any).value);
    }
}

import * as React from "react";
import { ICardModel } from "../model";
import CardContainer from "../containers/CardContainer";

export interface ICardComponentProps {
    card: ICardModel;
    subCards: ICardModel[];
    titleChanged: (newTitle: string) => void;
    remove: () => void;
    addSubCard: () => void;
}

export class CardComponent extends React.Component<ICardComponentProps, {}> {
    constructor() {
        super();
    }

    public render() {
        const { card } = this.props;
        const isEmptyCard = card.id.id === "-1";
        const subCards: React.HTMLProps<HTMLDivElement> = this.props.subCards.map((c, idx) =>
                                c &&
                                <li className="sub-card-container"><CardContainer  key={idx}
                                                card={c}
                                            /></li>
                            );
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
                            {
                                this.props.subCards.length > 0 &&
                                <ul className="sub-cards-list">{subCards}</ul>
                            }
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

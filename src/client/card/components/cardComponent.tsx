import * as React from "react";
import { ICardProps, CardParent_Card, HoverType, IHoveringCard } from "../model";
import { getEmptyImage } from "react-dnd-html5-backend";
import CardListContainer from "../containers/cardListContainer";

export interface ICardComponentProps {
    card: ICardProps;
    displayEmptySubCard: boolean;
    isDragLayer?: boolean;
    hoveringCard: IHoveringCard | undefined;
    hoveringAction: (options?: IHoveringCard) => void;
    hoveringDropAction: (hovering: IHoveringCard) => void;
    isParentCard: (card: ICardProps) => boolean;
    titleChanged: (newTitle: string) => void;
    remove: () => void;
    displayEmptySubCardAction: () => void;
}

interface ICardDragDropConnect{
    connectDragSource?: (p: any) => any;
    connectDropTarget?: (p: any) => any;
}

export default class CardComponent extends React.Component<ICardComponentProps & ICardDragDropConnect, {}> {
    constructor() {
        super();
    }

    public render(): any {
        const { card } = this.props;
        const connectDragSource = this.props.connectDragSource || ((p) => p);
        const connectDropTarget = this.props.connectDropTarget || ((p) => p);
        const isEmptyCard = card.id.id === "-1";
        const placeholder = isEmptyCard ? "Type to add new card..." : "";
        const isDragging = this.props.hoveringCard !== undefined
                            && this.props.hoveringCard.hoverType !== "NONE"
                            && card === this.props.hoveringCard.hoveringCard;
        return connectDropTarget(<div className="card-host">
                    { !isEmptyCard ?
                        connectDragSource(<div className="card-grabber">
                            <div className="grabber">
                                <div className="grabber-sign">
                                ≡
                                </div>
                            </div>
                        </div>)
                        :
                        <div className="empty-card-grabber">
                        </div>
                    }
                    <div className="card-element">
                            <div>
                                <input value={card.title} onChange={this.titleChanged.bind(this)} placeholder={placeholder}/>
                                <button onClick={this.props.remove} className="close-button">✖</button>
                            </div>
                            { true &&
                                <CardListContainer parentId={card.id.id}
                                        parentType={CardParent_Card}
                                        displayEmptyCard={this.props.displayEmptySubCard}
                                        />
                            }
                            {   // not on empty card, not on drag layer, and not if already displaying the empty sub card 
                                !isEmptyCard && this.props.isDragLayer !== true && !this.props.displayEmptySubCard &&
                                <button onClick={this.props.displayEmptySubCardAction}><span className="plus">+</span>sub card</button>
                            }
                    </div>
                    { isDragging &&
                        <div className="card-host-dragged-overlay"></div>
                    }
                </div>);
    }

    private titleChanged(e: React.SyntheticEvent<string>): void {
        this.props.titleChanged((e.target as any).value);
    }
}

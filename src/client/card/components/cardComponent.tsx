import * as React from "react";
import { DragSource, DragSourceCollector, DragSourceSpec } from "react-dnd";
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

const dragSpec: DragSourceSpec<ICardComponentProps> = {
    beginDrag(props, monitor, component) {
        console.log("Begin Drag");
        // Return the data describing the dragged item
        const item = { card: props.card };
        return item;
    },
};
interface IDragProps {
    connectDragSource?: (el: any) => any;
    connectDragPreview?: (el: any) => any;
    isDragging?: boolean;
}
const dragSourceCollector: DragSourceCollector = (connect, monitor): IDragProps => ({
  // Call this function inside render()
  // to let React DnD handle the drag events:
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  // You can ask the monitor about the current drag state:
  isDragging: monitor.isDragging(),
});

@(DragSource("card", dragSpec, dragSourceCollector) as any)
export default class CardComponent extends React.Component<ICardComponentProps, {}> {
    constructor() {
        super();
    }

    public render(): any {
        const { card } = this.props;
        const { connectDragSource, connectDragPreview } = (this.props as any);
        const isEmptyCard = card.id.id === "-1";
        const placeholder = isEmptyCard ? "Type to add new card..." : "";
        return connectDragPreview(<div className="card-host">
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
                            <CardListContainer parentId={card.id.id}
                                        parentType={CardParent_Card}
                                        displayEmptyCard={this.props.displayEmptySubCard}
                                        />
                            {   !isEmptyCard &&
                                <button onClick={this.props.displayEmptySubCardAction}><span className="plus">+</span>sub card</button>
                            }
                    </div>
                </div>);
    }

    private titleChanged(e: React.SyntheticEvent<string>): void {
        this.props.titleChanged((e.target as any).value);
    }
}

import * as React from "react";
import { findDOMNode } from 'react-dom';
import { DragSource, DragSourceCollector, DragSourceSpec } from "react-dnd";
import { DropTarget, DropTargetCollector, DropTargetSpec, DropTargetMonitor } from "react-dnd";
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

const dragSpec: DragSourceSpec<ICardComponentProps> = {
    beginDrag(props, monitor, component) {
        console.log("Begin Drag");
        // Return the data describing the dragged item
        const item = { card: props.card };
        return item;
    },
    endDrag(props: ICardComponentProps) {
        props.hoveringAction(undefined);
    }
};
interface IDragProps {
    connectDragSource: (el: any) => any;
    connectDragPreview: (el: any) => any;
    isDragging: boolean;
}
const dragSourceCollector: DragSourceCollector = (connect, monitor): IDragProps => ({
  // Call this function inside render()
  // to let React DnD handle the drag events:
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  // You can ask the monitor about the current drag state:
  isDragging: monitor.isDragging()
});

const dropSpec: DropTargetSpec<ICardComponentProps> = {
        drop: (props: ICardComponentProps, monitor?: DropTargetMonitor, component?: React.Component<ICardComponentProps, any>): Object|void => {
            if (props.hoveringCard !== undefined) {
                props.hoveringDropAction(props.hoveringCard);
            }
        },
        hover(props: ICardComponentProps, monitor: DropTargetMonitor, component: React.Component<ICardComponentProps, any>): void {
            if (props.card.id.id === "-1") {
                return;
            }
            if (!monitor.isOver({ shallow: true})) {
                return;
            }
            const dragItem = monitor.getItem() as any;
            const hoveringCard = dragItem ? dragItem.card as ICardProps : undefined;
            if (hoveringCard === props.card) {
                return;
            }
            if (hoveringCard && props.isParentCard(hoveringCard)) {
                return;
            }
            const clientOffset = monitor.getClientOffset();
            const componentRect = findDOMNode(component).getBoundingClientRect();
            const componentHeight = componentRect.bottom - componentRect.top;
            const isTop = (clientOffset.y - componentRect.top) < (componentHeight / 2);
            const hoverType = isTop ? "TOP" : "BOTTOM";
            const hoveringOver = props.card;
            if (!props.hoveringCard
                || hoverType !== props.hoveringCard.hoverType
                || hoveringOver !== props.hoveringCard.hoveringOver
                || hoveringCard !== props.hoveringCard.hoveringCard) {
                props.hoveringAction({ hoverType, hoveringOver, hoveringCard });
            }
        },
        canDrop(props: ICardComponentProps, monitor: DropTargetMonitor): boolean {
            return monitor.isOver({shallow: true});
        },
};

interface IDropProps {
    connectDropTarget: (el: any) => any;
    isOver: boolean;
    canDrop: boolean;
}
const dropSourceCollector: DropTargetCollector = (connect, monitor): IDropProps => ({
// Call this function inside render()
  // to let React DnD handle the drag events:
  connectDropTarget: connect.dropTarget(),
  // You can ask the monitor about the current drag state:
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
//   itemType: monitor.getItemType(),
});

@(DropTarget("card", dropSpec, dropSourceCollector) as any)
@(DragSource("card", dragSpec, dragSourceCollector) as any)
export default class CardComponent extends React.Component<ICardComponentProps, {}> {
    constructor() {
        super();
    }

    public componentDidMount() {
        // Use empty image as a drag preview so browsers don't draw it
        // and we can draw whatever we want on the custom drag layer instead.
        (this.props as any).connectDragPreview(getEmptyImage(), {
        // IE fallback: specify that we'd rather screenshot the node
        // when it already knows it's being dragged so we can hide it with CSS.
        captureDraggingState: true,
        });
    }

    public render(): any {
        const { card } = this.props;
        const { connectDragSource } = ((this.props as any) as IDragProps);
        const { connectDropTarget, isOver } = ((this.props as any) as IDropProps);
        const isEmptyCard = card.id.id === "-1";
        const placeholder = isEmptyCard ? "Type to add new card..." : "";
        const isDragging = this.props.hoveringCard !== undefined
                            && this.props.hoveringCard.hoverType !== "NONE"
                            && card === this.props.hoveringCard.hoveringCard;
        // If it's just a drag layer we mock the connect functions
        const connectDropTr = this.props.isDragLayer || isDragging || isEmptyCard ?
                                (c: any) => c : connectDropTarget;
        const connectDragSrc = this.props.isDragLayer || isDragging || isEmptyCard ?
                                (c: any) => c : connectDragSource;
        return connectDropTr(<div className="card-host">
                    { !isEmptyCard ?
                        connectDragSrc(<div className="card-grabber">
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

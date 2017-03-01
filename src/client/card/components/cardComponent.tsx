import * as React from "react";
import { DragSource, DragSourceCollector, DragSourceSpec } from "react-dnd";
import { DropTarget, DropTargetCollector, DropTargetSpec, DropTargetMonitor } from "react-dnd";
import { ICardProps, CardParent_Card } from "../model";
import { getEmptyImage } from "react-dnd-html5-backend";
import CardListContainer from "../containers/cardListContainer";

export interface ICardComponentProps {
    card: ICardProps;
    displayEmptySubCard: boolean;
    isDragLayer?: boolean;
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
        },
        hover(props: ICardComponentProps, monitor?: DropTargetMonitor, component?: React.Component<ICardComponentProps, any>): void {
        },
        canDrop(props: ICardComponentProps, monitor?: DropTargetMonitor): boolean {
            return true;
        },
};

interface IDropProps {
    connectDropTarget: (el: any) => any;
    isOver: boolean;
    isOverCurrent: boolean;
    canDrop: boolean;
}
const dropSourceCollector: DropTargetCollector = (connect, monitor): IDropProps => ({
// Call this function inside render()
  // to let React DnD handle the drag events:
  connectDropTarget: connect.dropTarget(),
  // You can ask the monitor about the current drag state:
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
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
        const { connectDragSource, isDragging } = ((this.props as any) as IDragProps);
        const { connectDropTarget } = ((this.props as any) as IDropProps);
        const isEmptyCard = card.id.id === "-1";
        const placeholder = isEmptyCard ? "Type to add new card..." : "";
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
                            <CardListContainer parentId={card.id.id}
                                        parentType={CardParent_Card}
                                        displayEmptyCard={this.props.displayEmptySubCard}
                                        />
                            {   !isEmptyCard && this.props.isDragLayer !== true &&
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

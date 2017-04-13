import * as React from "react";
import { findDOMNode } from 'react-dom';
import { DragSource, DragSourceCollector, DragSourceSpec } from "react-dnd";
import { DropTarget, DropTargetCollector, DropTargetSpec, DropTargetMonitor } from "react-dnd";
import { ICardProps } from "../model";
import { getEmptyImage } from "react-dnd-html5-backend";
import { ICardComponentProps } from "./cardComponent";
import CardComponent from "./cardComponent";

const dragSpec: DragSourceSpec<ICardComponentProps> = {
    beginDrag(props, monitor, component) {
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
            // if (props.card.id.id === "-1") {
            //     return;
            // }
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
            const hoveringOver = props.card;
            const hoverType = (isTop || hoveringOver.id.id === "-1") ? "TOP" : "BOTTOM"; // Empty card always top
            const hoveringOverSameCard =
                !props.hoveringCard ||
                hoveringOver === props.hoveringCard.hoveringOver ||
                (props.hoveringCard.hoveringOver && hoveringOver.id.id === props.hoveringCard.hoveringOver.id.id);
            if (!props.hoveringCard
                || hoverType !== props.hoveringCard.hoverType
                || !hoveringOverSameCard
                || hoveringCard !== props.hoveringCard.hoveringCard) {
                props.hoveringAction({ hoverType, hoveringOver, hoveringCard });
            }
        },
        canDrop(props: ICardComponentProps, monitor: DropTargetMonitor): boolean {
            return true;
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
export default class CardDraggableComponent extends React.Component<ICardComponentProps, {}> {
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
        const { connectDragSource } = ((this.props as any) as IDragProps);
        const { connectDropTarget } = ((this.props as any) as IDropProps);
        return <CardComponent {...this.props}
                                connectDragSource={connectDragSource}
                                connectDropTarget={connectDropTarget} />
    }
}

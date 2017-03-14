import * as React from "react";
import { findDOMNode } from 'react-dom';
import { DragSource, DragSourceCollector, DragSourceSpec } from "react-dnd";
import { DropTarget, DropTargetCollector, DropTargetSpec, DropTargetMonitor } from "react-dnd";
import { CardGroupComponent, ICardGroupComponentProps } from "./cardGroupComponent";
import { ICardGroupProps } from "../model/cardGroupModel";

interface IDragProps {
    connectDragSource: (el: any) => any;
    connectDragPreview: (el: any) => any;
    isDragging: boolean;
}

interface IDropProps {
    connectDropTarget: (el: any) => any;
    isOver: boolean;
    canDrop: boolean;
}

const dragSpec: DragSourceSpec<ICardGroupComponentProps> = {
    beginDrag(props, monitor, component) {
        console.log("Begin Drag");
        // Return the data describing the dragged item
        const item = { cardGroup: props.cardGroup };
        return item;
    },
    endDrag(props: ICardGroupComponentProps) {
        props.hoveringAction(undefined);
    },
};

const dragSourceCollector: DragSourceCollector = (connect, monitor): IDragProps => ({
  // Call this function inside render()
  // to let React DnD handle the drag events:
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  // You can ask the monitor about the current drag state:
  isDragging: monitor.isDragging()
});

const dropSpec: DropTargetSpec<ICardGroupComponentProps> = {
        drop: (props: ICardGroupComponentProps, monitor?: DropTargetMonitor, component?: React.Component<ICardGroupComponentProps, any>): Object|void => {
            console.log("drop", props.hoveringCardGroup);
            if (props.hoveringCardGroup !== undefined) {
                props.hoveringDropAction(props.hoveringCardGroup);
            }
        },
        hover(props: ICardGroupComponentProps, monitor: DropTargetMonitor, component: React.Component<ICardGroupComponentProps, any>): void {
            if (!monitor.isOver({ shallow: true})) {
                return;
            }
            const dragItem = monitor.getItem() as any;
            const hoveringCardGroup = dragItem ? dragItem.cardGroup as ICardGroupProps : undefined;
            if (hoveringCardGroup === props.cardGroup) {
                return;
            }
            if (hoveringCardGroup && props.isParentCardGroup(hoveringCardGroup)) {
                console.log("ignore because isparent");
                return;
            }
            const clientOffset = monitor.getClientOffset();
            const componentRect = findDOMNode(component).getBoundingClientRect();
            const componentWidth = componentRect.right - componentRect.left;
            const isLeft = (clientOffset.x - componentRect.width) < (componentWidth / 2);
            const hoveringOver = props.cardGroup;
            const hoverType = (isLeft || hoveringOver.id === "-1") ? "LEFT" : "RIGHT"; // Empty card group always left
            const hoveringOverSameCardGroup =
                !props.hoveringCardGroup ||
                hoveringOver === props.hoveringCardGroup.hoveringOver ||
                (props.hoveringCardGroup.hoveringOver && hoveringOver.id === props.hoveringCardGroup.hoveringOver.id);
            if (!props.hoveringCardGroup
                || hoverType !== props.hoveringCardGroup.hoverType
                || !hoveringOverSameCardGroup
                || hoveringCardGroup !== props.hoveringCardGroup.hoveringCardGroup) {
                props.hoveringAction({ hoverType, hoveringOver, hoveringCardGroup });
            }
        },
        canDrop(props: ICardGroupComponentProps, monitor: DropTargetMonitor): boolean {
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

@(DropTarget("cardGroup", dropSpec, dropSourceCollector) as any)
@(DragSource("cardGroup", dragSpec, dragSourceCollector) as any)
export class CardGroupDraggableComponent extends React.Component<ICardGroupComponentProps, {}> {
        public render(): any {
        const { connectDragSource } = ((this.props as any) as IDragProps);
        const { connectDropTarget } = ((this.props as any) as IDropProps);
        return <CardGroupComponent {...this.props}
                                connectDragSource={connectDragSource}
                                connectDropTarget={connectDropTarget} />
    }
}

import * as React from "react";
import { findDOMNode } from 'react-dom';
import { ICardProps, IHoveringCard } from "../model";
import { DropTarget, DropTargetCollector, DropTargetSpec, DropTargetMonitor } from "react-dnd";

export interface IInterCardSpaceComponentProps {
    displayEmptyCardAbove: () => void;
    hoveringAction: (options?: IHoveringCard) => void;
    isDisplayingEmptyCardAbove: boolean;
    isEmptyCardBelow: boolean;
    cardBelow: ICardProps | undefined;
}

const dropSpec: DropTargetSpec<IInterCardSpaceComponentProps> = {
        drop: (props: IInterCardSpaceComponentProps, monitor?: DropTargetMonitor, component?: React.Component<IInterCardSpaceComponentProps, any>): Object|void => {
        },
        hover(props: IInterCardSpaceComponentProps, monitor: DropTargetMonitor, component: React.Component<IInterCardSpaceComponentProps, any>): void {
             // You can access the coordinates if you need them
            const clientOffset = monitor.getClientOffset();
            const componentRect = findDOMNode(component).getBoundingClientRect();
            const componentHeight = componentRect.bottom - componentRect.top;
            const isTop = (clientOffset.y - componentRect.top) < (componentHeight / 2);
            const dragItem = monitor.getItem() as any;
            props.hoveringAction({
                hoverType: isTop ? "TOP" : "BOTTOM",
                hoveringOver: props.cardBelow,
                hoveringCard: dragItem ? dragItem.card as ICardProps: undefined
            });
        },
        canDrop(props: IInterCardSpaceComponentProps, monitor?: DropTargetMonitor): boolean {
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
export class InterCardSpaceComponent extends React.Component<IInterCardSpaceComponentProps, {}> {
    public render() {
        const { connectDropTarget, isOver } = ((this.props as any) as IDropProps);
        let plusSign = "+";
        if (this.props.isDisplayingEmptyCardAbove) {
            plusSign = "";
        } else if (this.props.isEmptyCardBelow) {
            plusSign = "*";
        }
        const getInterCardSpace = () => <div className="inter-card-space">
                    <div className="plus-container"
                        onClick={this.props.displayEmptyCardAbove}
                        >
                        <div className="plus-sign">{plusSign}</div>
                    </div>
                    <div className="card-seperator-container">
                        <div className="card-seperator">
                        </div>
                    </div>
                </div>;
        /*return connectDropTarget(<div>
                {
                    this.props.hoveringCard ?
                    <div>
                        {getInterCardSpace()}
                        <div>{this.props.hoveringCard.title}</div>
                        {getInterCardSpace()}
                    </div>
                    :
                    getInterCardSpace()
                }
        </div>);*/
        //return connectDropTarget(getInterCardSpace());
        return getInterCardSpace(); // TODO: remove the DropTarget stuff if not needed.
    }
}

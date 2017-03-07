import * as React from "react";
import { ICardProps } from "../model/cardModel";
import { DropTarget, DropTargetCollector, DropTargetSpec, DropTargetMonitor } from "react-dnd";
import { IHoveringCard } from "../model";
import CardContainer from "../containers/cardContainer";
import { InterCardSpaceComponent } from "./interCardSpaceComponent";
import { ICardListComponentProps, CardListComponent } from "./cardListComponent";

const dropSpec: DropTargetSpec<ICardListComponentProps> = {
        canDrop(props: ICardListComponentProps): boolean {
            return true;
        },
};

interface IDropProps {
    connectDropTarget: (el: any) => any;
    isOver: boolean;
}
const dropSourceCollector: DropTargetCollector = (connect, monitor): IDropProps => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
});

@(DropTarget("card", dropSpec, dropSourceCollector) as any)
export class CardListDropableComponent extends React.Component<ICardListComponentProps, {}> {

    public componentWillReceiveProps(nextProps: ICardListComponentProps & IDropProps) {
        const { isOver } = ((this.props as any) as IDropProps);
        if (isOver && !nextProps.isOver) {
            // SetTimeout :/ needed because otherwise we get an ReactDOM warning about "Cannot update during an existing state transition"
            setTimeout(() => this.props.hoveringAction(undefined), 1);
        }
    }

    public render() {
        const { connectDropTarget } = ((this.props as any) as IDropProps);
        return  <CardListComponent {...this.props}
                                    connectDropTarget={connectDropTarget} />;
    }
}

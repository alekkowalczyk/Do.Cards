import * as React from "react";
import { ICardGroupProps } from "../model/cardGroupModel";
import { DropTarget, DropTargetCollector, DropTargetSpec, DropTargetMonitor } from "react-dnd";
import { IHoveringCardGroup } from "../model";
import CardGroupContainer from "../containers/cardGroupContainer";
import { ICardGroupListComponentProps, CardGroupListComponent } from "./cardGroupListComponent";

const dropSpec: DropTargetSpec<ICardGroupListComponentProps> = {
        canDrop(props: ICardGroupListComponentProps): boolean {
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

@(DropTarget("cardGroup", dropSpec, dropSourceCollector) as any)
export class CardGroupListDropableComponent extends React.Component<ICardGroupListComponentProps, {}> {

    public componentWillReceiveProps(nextProps: ICardGroupListComponentProps & IDropProps) {
        const { isOver } = ((this.props as any) as IDropProps);
        if (isOver && !nextProps.isOver) {
            // SetTimeout :/ needed because otherwise we get an ReactDOM warning about "Cannot update during an existing state transition"
            setTimeout(() => this.props.hoveringAction(undefined), 1);
        }
    }

    public render() {
        const { connectDropTarget } = ((this.props as any) as IDropProps);
        return  <CardGroupListComponent {...this.props}
                                    connectDropTarget={connectDropTarget} />;
    }
}

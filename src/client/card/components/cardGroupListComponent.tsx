import * as React from "react";
import { ICardGroupProps } from "../model/cardGroupModel";
import { IHoveringCardGroup } from "../model";
import CardGroupContainer from "../containers/cardGroupContainer";

export interface ICardGroupListComponentProps {
    cardGroups: ICardGroupProps[];
    hoveringCardGroupOptions: IHoveringCardGroup;
    hoveringAction: (options?: IHoveringCardGroup) => void;
}

interface ICardListDropConnect{
    connectDropTarget?: (p: any) => any;
}

export class CardGroupListComponent extends React.Component<ICardGroupListComponentProps & ICardListDropConnect, {}> {

    public render() {
        const { cardGroups } = this.props;
        const connectDropTarget = this.props.connectDropTarget || ((p) => p);
        return  connectDropTarget(<div>
                        {
                             this.props.cardGroups.map((cg, idx) => {
                            const { hoveringOver, hoverType, hoveringCardGroup } = this.props.hoveringCardGroupOptions;
                            const isHoverOverEmptyCard = hoveringOver
                                    && hoveringOver.id === "-1"
                                    && cg.id === "-1"
                                    && hoveringOver.parentId === cg.parentId;
                            const hoverLeft = (hoveringOver === cg
                                    && hoverType === "LEFT")
                                    || (isHoverOverEmptyCard);
                            const hoverRight = hoveringOver === cg
                                    && hoverType === "RIGHT";
                            const floatLeftStyle = { float: "left"};
                            return cg &&
                            <div key={idx} style={{ display: "inline-block", verticalAlign: "top" }} >
                                {
                                    hoveringCardGroup && hoverLeft &&
                                    <div style={floatLeftStyle}>
                                        <CardGroupContainer cardGroup={hoveringCardGroup} />
                                    </div>
                                }
                                {
                                    hoveringCardGroup !== cg &&
                                    <div style={floatLeftStyle}>
                                        <CardGroupContainer cardGroup={cg} />
                                    </div>
                                }
                                {
                                    hoveringCardGroup && hoverRight &&
                                    <div style={floatLeftStyle}>
                                        <CardGroupContainer cardGroup={hoveringCardGroup} />
                                    </div>
                                }
                            </div>;
                        }
                        )
                        }
                </div>);
    }
}

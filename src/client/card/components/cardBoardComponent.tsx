import * as React from "react";
import { ICardGroupProps } from "../model/cardGroupModel";
import { IHoveringCardGroup } from "../model/cardModuleUiModel";
import CardGroupContainer from "../containers/cardGroupContainer";

export interface ICardGroupComponentProps {
    cardGroups: ICardGroupProps[];
    hoveringCardGroupOptions: IHoveringCardGroup;
    addEmptyCardGroup: () => void;
}

export class CardBoardComponent extends React.Component<ICardGroupComponentProps, {}> {
    public render() {
        return  <div className="card-board">
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
                                    console.log("hoveringCardGroup",this.props.hoveringCardGroupOptions );
                            return cg &&
                            <div key={idx} style={{ float: "left" }} >
                                {
                                    hoveringCardGroup && hoverLeft &&
                                    <div>
                                        <CardGroupContainer cardGroup={hoveringCardGroup} />
                                    </div>
                                }
                                {
                                    hoveringCardGroup !== cg &&
                                    <div>
                                        <CardGroupContainer cardGroup={cg} />
                                    </div>
                                }
                                {
                                    hoveringCardGroup && hoverRight &&
                                    <div>
                                        <CardGroupContainer cardGroup={hoveringCardGroup} />
                                    </div>
                                }
                            </div>;
                        }
                        )
                    }
                    <div style={{clear: "both"}} />
                </div>;
    }
}

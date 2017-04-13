import * as React from "react";
import { ICardGroupProps } from "../model/cardGroupModel";
import { IHoveringCardGroup } from "../model/cardModuleUiModel";
import CardGroupListContainer from "../containers/cardGroupListContainer";

export interface ICardGroupComponentProps {
}

export class CardBoardComponent extends React.Component<ICardGroupComponentProps, {}> {
    public render() {
        return  <div className="card-board">
                    <CardGroupListContainer />
                    <div style={{clear: "both"}} />
                </div>;
    }
}

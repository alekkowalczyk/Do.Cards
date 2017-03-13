import * as React from "react";
import { ICardGroupProps } from "../model/cardGroupModel";
import CardGroupContainer from "../containers/cardGroupContainer";

export interface ICardGroupComponentProps {
    cardGroups: ICardGroupProps[];
    addEmptyCardGroup: () => void;
}

export class CardBoardComponent extends React.Component<ICardGroupComponentProps, {}> {
    public render() {
        return  <div className="card-board">
                    {
                        this.props.cardGroups.map((cg, idx) =>
                            cg &&
                            <div key={idx} style={{ float: "left" }} >
                                <CardGroupContainer cardGroup={cg} />
                            </div>
                        )
                    }
                    <div style={{clear: "both"}} />
                </div>;
    }
}

import * as React from "react";
import { ICardGroupModel } from "../model/cardGroupModel";
import CardGroupContainer from "../containers/CardGroupContainer";

export interface ICardGroupComponentProps {
    cardGroups: ICardGroupModel[];
    addEmptyCardGroup: () => void;
}

export class CardBoardComponent extends React.Component<ICardGroupComponentProps, {}> {
    public render() {
        return  <div className="card-board">
                    {
                        this.props.cardGroups.map((cg, idx) =>
                            cg &&
                            <div key={idx} style={{ float: "left" }} >
                                <span style={{color:"blue"}}>{idx}/{cg.id}</span>
                                <CardGroupContainer cardGroup={cg} />
                            </div>
                        )
                    }
                    <div style={{clear: "both"}} />
                </div>;
    }
}

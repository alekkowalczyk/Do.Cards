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
                        this.props.cardGroups.map((cg) =>
                            cg &&
                            <div key={cg.id} style={{ float: "left" }} >
                                <CardGroupContainer cardGroup={cg} />
                            </div>
                        )
                    }
                    <button onClick={this.props.addEmptyCardGroup} className="add-card-group-button"><span className="plus">+</span>card group</button>
                    <div style={{clear: "both"}} />
                </div>;
    }
}

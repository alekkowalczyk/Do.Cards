import * as React from "react";
import { ICardProps } from "../model";

export interface IInterCardSpaceComponentProps {
    displayEmptyCardAbove: () => void;
    isDisplayingEmptyCardAbove: boolean;
    isEmptyCardBelow: boolean;
    cardBelow: ICardProps | undefined;
}

export class InterCardSpaceComponent extends React.Component<IInterCardSpaceComponentProps, {}> {
    public render() {
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
        return getInterCardSpace();
    }
}

import * as React from "react";
import { ICardModel } from "../model";
import CardContainer from "../containers/CardContainer";

export interface ICardComponentProps {
    id: string;
    title: string;
    subCards: ICardModel[];
    titleChanged: (newTitle: string) => void;
    remove: () => void;
    addSubCard: () => void;
}

export class CardComponent extends React.Component<ICardComponentProps, {}> {
    constructor() {
        super();
    }

    public render() {
        const subCards: React.HTMLProps<HTMLDivElement> = this.props.subCards.map((c, idx) =>
                                c &&
                                <li><CardContainer  key={idx}
                                                card={c}
                                            /></li>
                            );
        const placeholder = this.props.id === "-1" ? "Type to add new card..." : "";
        return  <div className="card-element">
                    <div>
                        <input value={this.props.title} onChange={this.titleChanged.bind(this)} placeholder={placeholder}/>
                        <button onClick={this.props.remove} className="close-button">✖</button>
                    </div>
                    {
                        this.props.subCards.length > 0 &&
                        <ul>{subCards}</ul>
                    }
                    {   this.props.id !== "-1" &&
                        <button onClick={this.props.addSubCard}><span className="plus">+</span>sub card</button>
                    }
                </div>;
    }

    private titleChanged(e: React.SyntheticEvent<string>): void {
        this.props.titleChanged((e.target as any).value);
    }
}

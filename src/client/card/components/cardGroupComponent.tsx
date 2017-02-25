import * as React from "react";
import { ICardModel } from "../model/cardModel";
import { ICardGroupModel } from "../model/cardGroupModel";
import CardContainer from "../containers/CardContainer";
import CardGroupContainer from "../containers/CardGroupContainer";

export interface ICardGroupComponentProps {
    cards: ICardModel[];
    subCardGroups: ICardGroupModel[];
    cardGroup: ICardGroupModel;
    titleChanged: (newTitle: string) => void;
    addEmptyCard: () => void;
    addSubCardGroup: () => void;
    remove: () => void;
}

export class CardGroupComponent extends React.Component<ICardGroupComponentProps, {}> {
    public render() {
        const { title, id, parentId } = this.props.cardGroup;
        const subCardGroups: React.HTMLProps<HTMLDivElement> =
                        this.props.subCardGroups.reverse().map((cg, idx) =>
                            cg &&
                            <CardGroupContainer key={idx} cardGroup={cg} />
                        )
                    ;
        const placeholder = id === "-1" ? "Type to add new group" : "";
        return  <div className={parentId ? "sub-card-group-element" : "card-group-element"}>
                    <div>
                        <input value={title} onChange={this.titleChanged.bind(this)} placeholder={placeholder}/>
                        <button onClick={this.props.remove} className="close-button">✖</button>
                    </div>
                    <div>
                        {   id !== "-1" &&
                            <button onClick={this.props.addSubCardGroup}><span className="plus">+</span>sub card group</button>
                        }
                        {   this.props.subCardGroups.length > 0 && this.props.cards.length === 0 &&
                            <button onClick={this.props.addEmptyCard}><span className="plus">+</span>card</button>
                        }
                    </div>
                    <div style={{ float: "right" }}>
                        { subCardGroups }
                    </div>
                    <div style={{float:"left"}}>
                        {
                            this.props.cards.map((c, idx) =>
                                c &&
                                <CardContainer  key={idx}
                                                card={c}
                                            />
                            )
                        }
                    </div>
                    <div style={{clear:"both"}}></div>
                </div>;
    }

    private titleChanged(e: React.SyntheticEvent<string>): void {
        this.props.titleChanged((e.target as any).value);
    }
}

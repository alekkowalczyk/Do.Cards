import * as React from "react";
import { CardParent_CardGroup } from "../model/cardModel";
import { ICardGroupModel } from "../model/cardGroupModel";
import CardGroupContainer from "../containers/CardGroupContainer";
import CardListContainer from "../containers/cardListContainer";

export interface ICardGroupComponentProps {
    displayEmptyCard: boolean;
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
        const placeholder = id === "-1" ? "Type to add new group..." : "";
        return  <div className={parentId ? "sub-card-group-element" : "card-group-element"}>
                    <div>
                        <input value={title} onChange={this.titleChanged.bind(this)} placeholder={placeholder}/>
                        <button onClick={this.props.remove} className="close-button">✖</button>
                    </div>
                    <div>
                        {   id !== "-1" &&
                            <button onClick={this.props.addSubCardGroup}><span className="plus">+</span>sub card group</button>
                        }
                        {   id !== "-1" && !this.props.displayEmptyCard &&
                            <button onClick={this.props.addEmptyCard}><span className="plus">+</span>card</button>
                        }
                    </div>
                    <div style={{ float: "right" }}>
                        { subCardGroups }
                    </div>
                    <CardListContainer parentId={this.props.cardGroup.id}
                                        parentType={CardParent_CardGroup}
                                        displayEmptyCard={this.props.displayEmptyCard}
                                        />
                    <div style={{clear:"both"}}></div>
                </div>;
    }

    private titleChanged(e: React.SyntheticEvent<string>): void {
        this.props.titleChanged((e.target as any).value);
    }
}

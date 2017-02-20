import * as React from "react";
import { ICardModel } from "../model/cardModel";
import { ICardGroupModel } from "../model/cardGroupModel";
import CardContainer from "../containers/CardContainer";
import CardGroupContainer from "../containers/CardGroupContainer";

export interface ICardGroupComponentProps {
    cards: ICardModel[];
    subCardGroups: ICardGroupModel[];
    title: string;
    titleChanged: (newTitle: string) => void;
    addEmptyCard: () => void;
    addSubCardGroup: () => void;
    remove: () => void;
}

export class CardGroupComponent extends React.Component<ICardGroupComponentProps, {}> {
    public render() {
        const subCardGroups: React.HTMLProps<HTMLDivElement> =                     
                        this.props.subCardGroups.map((cg) =>
                            cg &&
                            <div key={cg.id} >
                                <CardGroupContainer cardGroup={cg} />
                            </div>
                        )
                    ;
        return  <div style={{border: "solid 1px gray", margin: "5px", padding: "5px"}}>
                    <div>Card group</div>
                    <div>
                        <input value={this.props.title} onChange={this.titleChanged.bind(this)}/>
                        <button onClick={this.props.remove}>X</button>
                    </div>
                    <div style={{ float: "right" }}>
                        { subCardGroups }
                    </div>
                    <div style={{float:"left"}}>
                        {
                            this.props.cards.map((c) =>
                                c &&
                                <CardContainer  key={c.id}
                                                card={c}
                                            />
                            )
                        }
                    </div>
                    <div style={{clear:"both"}}></div>
                    <button onClick={this.props.addEmptyCard}>Add card</button>
                    <button onClick={this.props.addSubCardGroup}>Add sub card group</button>
                </div>;
    }

    private titleChanged(e: React.SyntheticEvent<string>): void {
        this.props.titleChanged((e.target as any).value);
    }
}

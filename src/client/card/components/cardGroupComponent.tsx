import * as React from "react";
import { CardParent_CardGroup } from "../model/cardModel";
import { ICardGroupProps } from "../model/cardGroupModel";
import { IHoveringCardGroup } from "../model/cardModuleUiModel";
import CardGroupContainer from "../containers/cardGroupContainer";
import CardGroupListContainer from "../containers/cardGroupListContainer";
import CardListContainer from "../containers/cardListContainer";

export interface ICardGroupComponentProps {
    displayEmptyCard: boolean;
    cardGroup: ICardGroupProps;
    isDragLayer?: boolean;
    hasSubGroups: boolean;
    hoveringCardGroup: IHoveringCardGroup | undefined;
    hoveringAction: (options?: IHoveringCardGroup) => void;
    hoveringDropAction: (hovering: IHoveringCardGroup) => void;
    isParentCardGroup: (card: ICardGroupProps) => boolean;
    titleChanged: (newTitle: string) => void;
    addEmptyCard: () => void;
    addSubCardGroup: () => void;
    remove: () => void;
}

interface ICardGroupDragDropConnect{
    connectDragSource?: (p: any) => any;
    connectDropTarget?: (p: any) => any;
}

export class CardGroupComponent extends React.Component<ICardGroupComponentProps & ICardGroupDragDropConnect, {}> {
    public render() {
        const { title, id, parentId } = this.props.cardGroup;
        const connectDragSource = this.props.connectDragSource || ((p) => p);
        const connectDropTarget = this.props.connectDropTarget || ((p) => p);
        const placeholder = id === "-1" ? "Type to add new group..." : "";
        return connectDropTarget(<div className={parentId ? "sub-card-group-element" : "card-group-element"}>
                    <div className="card-group-header-host">
                        <div className="card-group-grabber">
                            {connectDragSource(<div className="group-grabber">
                                <div className="group-grabber-sign">
                                ≡
                                </div>
                            </div>)}
                        </div>
                        <div className="card-group-header">
                            <div>
                                <input value={title} onChange={this.titleChanged.bind(this)} placeholder={placeholder}/>
                                <button onClick={this.props.remove} className="close-button">✖</button>
                            </div>
                            <div>
                                {   id !== "-1" &&
                                    <button onClick={this.props.addSubCardGroup}><span className="plus">+</span>sub card group...</button>
                                }
                                {   id !== "-1" && !this.props.displayEmptyCard &&
                                    <button onClick={this.props.addEmptyCard}><span className="plus">+</span>card</button>
                                }
                            </div>
                        </div>
                    </div>
                    {
                        !this.props.isDragLayer && this.props.hasSubGroups &&
                        <div style={{float: "right"}} >
                            <CardGroupListContainer parentId={this.props.cardGroup.id} />
                        </div>
                    }
                    {   !this.props.isDragLayer &&
                        <CardListContainer parentId={this.props.cardGroup.id}
                                            parentType={CardParent_CardGroup}
                                            displayEmptyCard={this.props.displayEmptyCard}
                                            />
                    }
                    <div style={{clear:"both"}}></div>
                </div>);
    }

    private titleChanged(e: React.SyntheticEvent<string>): void {
        this.props.titleChanged((e.target as any).value);
    }
}

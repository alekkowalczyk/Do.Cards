import { CardModel } from "./cardModel";
import { CardGroupModel } from "./cardGroupModel";
import { ICardModuleUI } from "./cardModuleUiModel";

export interface IRootCardsModel {
    readonly moduleUI: ICardModuleUI;
    readonly cards: CardModel[];
    readonly cardGroups: CardGroupModel[];
};

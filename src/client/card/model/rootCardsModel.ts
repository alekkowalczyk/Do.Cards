import { CardModel } from "./cardModel";
import { ICardGroupModel } from "./cardGroupModel";
import { ICardModuleUI } from "./cardModuleUiModel";

export interface IRootCardsModel {
    readonly moduleUI: ICardModuleUI;
    readonly cards: CardModel[];
    readonly cardGroups: ICardGroupModel[];
};

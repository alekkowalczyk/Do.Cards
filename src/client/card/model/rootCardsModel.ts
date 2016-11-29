import { ICardModel } from "./cardModel";
import { ICardGroupModel } from "./cardGroupModel";

export interface IRootCardsModel {
    readonly cards: ICardModel[];
    readonly cardGroups: ICardGroupModel[];
};

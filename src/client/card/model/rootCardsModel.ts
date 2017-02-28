import { CardModel } from "./cardModel";
import { ICardGroupModel } from "./cardGroupModel";

export interface IRootCardsModel {
    readonly cards: CardModel[];
    readonly cardGroups: ICardGroupModel[];
};

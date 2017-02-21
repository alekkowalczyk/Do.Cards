export type CardStatus = "OK"|"Empty"|"Saving"|"Saved"|"Changed";
export type CardParent_CardGroup = "CardGroup";
export const CardParent_CardGroup: CardParent_CardGroup = "CardGroup";
export type CardParent_Card = "Card";
export const CardParent_Card = "Card";
export type CardParentType = CardParent_CardGroup | CardParent_Card;

export interface ICardId {
    readonly id: string;
    readonly parentType: CardParentType;
    readonly parentId: string;
}

export interface ICardModel {
    readonly id: ICardId;
    readonly title: string;
    readonly status: CardStatus;
};


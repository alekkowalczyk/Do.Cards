export type CardStatus = "OK"|"Saving"|"Saved"|"Changed";
export interface ICardModel {
    readonly id: string;
    readonly cardGroupId: string;
    readonly title: string;
    readonly status: CardStatus;
};


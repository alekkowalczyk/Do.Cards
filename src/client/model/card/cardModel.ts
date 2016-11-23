export type CardStatus = "OK"|"Saving"|"Saved"|"Changed";
export interface ICardModel {
    readonly id: string;
    readonly title: string;
    readonly status: CardStatus;
}
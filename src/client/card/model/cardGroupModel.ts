export type CardGroupStatus = "OK"|"Empty"|"Saving"|"Saved"|"Changed";
export interface ICardGroupModel {
    readonly id: string;
    readonly parentId?: string;
    readonly title: string;
    readonly status: CardGroupStatus;
};

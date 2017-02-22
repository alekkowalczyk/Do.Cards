export type CardGroupStatus = "OK"|"Empty"|"Saving"|"Saved"|"Changed";
export interface ICardGroupModelUI {
    readonly forceDisplayAddCard?: boolean; // Normaly the empty card (for adding new cards) is displayed when there either no sub groups or already some cards
                                            // With this flag we can force the UI to display an empty card (for adding new cards)
}
export interface ICardGroupModel {
    readonly id: string;
    readonly ui: ICardGroupModelUI;
    readonly parentId?: string;
    readonly title: string;
    readonly status: CardGroupStatus;
};

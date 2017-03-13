export type CardGroupStatus = "OK"|"Empty"|"Saving"|"Saved"|"Changed";
export interface ICardGroupModelUI {
    readonly forceDisplayAddCard?: boolean; // Normaly the empty card (for adding new cards) is displayed when there either no sub groups or already some cards
                                            // With this flag we can force the UI to display an empty card (for adding new cards)
                                            // Used when there is an card group with sub grups but without any card on root level, then the empty card to add 
                                            // isn't displayed, and a separate button set's this flag to true to allow the user to add a card on the root level.
}

export interface ICardGroupProps {
    readonly id: string;
    readonly ui: ICardGroupModelUI;
    readonly parentId?: string;
    readonly title: string;
    readonly status: CardGroupStatus;
    readonly order: number;
};

export class CardGroupModel implements ICardGroupProps {
    public readonly id: string;
    public readonly ui: ICardGroupModelUI;
    public readonly parentId?: string;
    public readonly title: string;
    public readonly status: CardGroupStatus;
    public readonly order: number;

    public static GetEmpty(options: {
        id: string,
        order: number,
    }): CardGroupModel {
        return new CardGroupModel({
                id: options.id,
                order: options.order,
                ui: {},
                title: "",
                status: "Empty",
        });
    }


    constructor(props: ICardGroupProps) {
        this.id = props.id;
        this.ui = props.ui;
        this.parentId = props.parentId;
        this.title = props.title;
        this.status = props.status;
        this.order = props.order;
    }
}

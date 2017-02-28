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

export interface ICardUI {
    readonly displayAddSubCard?: boolean;
    readonly displayEmptyCardAbove?: boolean;
}

export interface ICardProps {
    readonly id: ICardId;
    readonly title: string;
    readonly status: CardStatus;
    readonly order?: number;
    readonly ui: ICardUI;
};

export class CardModel implements ICardProps {
    public readonly id: ICardId;
    public readonly title: string;
    public readonly status: CardStatus;
    public readonly order?: number;
    public readonly ui: ICardUI;

    public static GetEmpty(options: {
        id: ICardId,
        order: number,
    }): CardModel {
        return new CardModel({
                id: options.id,
                ui: {},
                title: "",
                order: options.order,
                status: "Empty",
        });
    }

    constructor(props: ICardProps) {
        this.id = props.id;
        this.title = props.title;
        this.status = props.status;
        this.order = props.order;
        this.ui = props.ui;
    }
}

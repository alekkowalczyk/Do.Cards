import { List, Record } from "immutable";
import { CardModel } from "./cardModel";

type CardListParams = {
    cards?: List<CardModel>
};

export class CardListModel extends Record({ cards: List<CardModel>()}) {
    public readonly cards: List<CardModel>;

    constructor(params?: CardListParams) {
        params ? super(params) : super();
    }

    public addCard(card: CardModel): CardListModel {
        return this.merge({ cards: this.cards.push(card)}) as this;
    }

    public updateCard(card: CardModel): CardListModel {
        if (!card.id) {
            throw "cannot update card without id";
        }
        const index = this.cards.findIndex((c) => c !== undefined && c.id === card.id);
        return this.merge({
            cards: this.cards.set(index, card)
        }) as this;
    }
}

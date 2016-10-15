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
    // Public methods should be only called in reducers!
    public getCard(id: string): CardModel {
        return this.cards.find((c) => c !== undefined && c.id === id);
    }

    public addCard(card: CardModel): CardListModel {
        return this.merge({ cards: this.cards.push(card)}) as this;
    }

    public updateCard(card: CardModel): CardListModel {
        if (!card.id) {
            throw "cannot update card without id";
        }
        const index = this.cards.findIndex((c) => c !== undefined && c.id === card.id);
        if (index < 0) {
            throw "updateCard: no card with id:" + card.id;
        }
        return this.merge({
            cards: this.cards.set(index, card),
        }) as this;
    }

    public archiveCard(id: string): CardListModel {
        const index = this.cards.findIndex((c) => c !== undefined && c.id === id);
        if (index < 0) {
            throw "updateCard: no card with id:" + id;
        }
        return this.merge({ cards: this.cards.remove(index)}) as this;
    }
}

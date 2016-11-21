import { List, Record } from "immutable";
import { CardState } from "./cardState";

type CardGroupParams = {
    cards?: List<CardState>
};

export class CardGroupState extends Record({ cards: List<CardState>()}) {
    public readonly cards: List<CardState>;

    constructor(params?: CardGroupParams) {
        params ? super(params) : super();
    }
    // Public methods should be only called in reducers!
    public getCard(id: string): CardState {
        return this.cards.find((c) => c !== undefined && c.id === id);
    }

    public addCard(card: CardState): CardGroupState {
        return this.merge({ cards: this.cards.push(card)}) as this;
    }

    public updateCard(card: CardState): CardGroupState {
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

    public archiveCard(id: string): CardGroupState {
        const index = this.cards.findIndex((c) => c !== undefined && c.id === id);
        if (index < 0) {
            throw "updateCard: no card with id:" + id;
        }
        return this.merge({ cards: this.cards.remove(index)}) as this;
    }
}

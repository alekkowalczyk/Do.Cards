import { Record } from "immutable";

type CardParams = {
    id?: string,
    title?: string,
    status?: CardStatus,
};
export type CardStatus = "OK"|"Saving"|"Saved";

export class CardModel extends Record({ id: "", title: "", status: "OK"}) {
    public readonly id: string;
    public readonly title: string;
    public readonly status: CardStatus;

    constructor(params?: CardParams) {
        params ? super(params) : super();
    }

    public setStatus(status: CardStatus): CardModel {
        return this.merge({status}) as this;
    }

    public with(values: CardParams): CardModel {
        return this.merge(values) as this;
    }
}

import { Record } from "immutable";

type CardParams = {
    id?: string,
    title?: string
};

export class CardModel extends Record({ id: "", title: ""}) {
    public readonly id: string;
    public readonly title: string;

    constructor(params?: CardParams) {
        params ? super(params) : super();
    }

    public with(values: CardParams) {
        return this.merge(values) as this;
    }
}

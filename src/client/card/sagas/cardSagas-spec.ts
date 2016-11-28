import { handleCardTitleChanged, delay } from "./cardSagas";
import { CardActions } from "../actions";
import { call, put } from "redux-saga/effects";
import * as chai from "chai";
const expect = chai.expect;

describe("cardSagas", () => {
    describe("handleCardTitleChanged", () => {
        const generator = handleCardTitleChanged({id: "fakeId", title: "fakeTitle"});
        it("dispatches CHANGE_CARD_TITLE actions", () => {
            expect(generator.next().value).to.deep.equal(put(CardActions.changeCardTitle("fakeId", "fakeTitle")));
        });
        it("waits 500 milliseconds", () => {
            expect(generator.next().value).to.deep.equal(call(delay, 500));
        });
    });
});
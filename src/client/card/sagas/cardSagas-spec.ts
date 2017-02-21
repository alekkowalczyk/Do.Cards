import { handleCardTitleChanged } from "./cardSagas";
import { sagaUtils } from "../../common";
import { CardActions } from "../actions";
import { ICardId } from "../model/cardModel";
import { call, put } from "redux-saga/effects";
import * as chai from "chai";
const { expect } = chai;
const { delay } = sagaUtils;

describe("cardSagas", () => {
    describe("handleCardTitleChanged", () => {
        const fakeId = <ICardId>{ id: "fakeId", parentType: "Card", parentId: "fake"};
        const generator = handleCardTitleChanged({id: fakeId, title: "fakeTitle"});
        it("dispatches CHANGE_CARD_TITLE actions", () => {
            expect(generator.next().value).to.deep.equal(put(CardActions.changeCardTitle(fakeId, "fakeTitle")));
        });
        it("waits 500 milliseconds", () => {
            expect(generator.next().value).to.deep.equal(call(delay, 500));
        });
    });
});
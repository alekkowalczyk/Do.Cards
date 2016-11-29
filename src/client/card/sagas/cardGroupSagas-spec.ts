import { handleCardGroupTitleChanged } from "./cardGroupSagas";
import { sagaUtils } from "../../common";
import { CardGroupActions } from "../actions";
import { call, put } from "redux-saga/effects";
import * as chai from "chai";
const { expect } = chai;
const { delay } = sagaUtils;

describe("cardGroupSagas", () => {
    describe("handleCardGroupTitleChanged", () => {
        const generator = handleCardGroupTitleChanged({id: "fakeId", title: "fakeTitle"});
        it("dispatches CHANGE_CARDGROUP_TITLE actions", () => {
            expect(generator.next().value).to.deep.equal(put(CardGroupActions.changeCardGroupTitle("fakeId", "fakeTitle")));
        });
        it("waits 500 milliseconds", () => {
            expect(generator.next().value).to.deep.equal(call(delay, 500));
        });
    });
});
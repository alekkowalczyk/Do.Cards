import { ICardGroupModel, ICardModel } from "../model";
import cardReducer from "./cardReducer";
import { CardActions } from "../actions";

import * as chai from "chai";
const expect = chai.expect;

describe("cardReducer", () => {
    describe("CHANGE_CARD_TITLE dispatched", () => {
        it("set's the new title in the card", () => {
            const initialstate: ICardModel = {
                    id: "1",
                    title: "some title1",
                    status: "OK",
            };
            const expectedState: ICardModel = {
                    id: "1",
                    title: "some title1 - CHANGED",
                    status: "OK",
            };
            const resultingState = cardReducer(initialstate, CardActions.changeCardTitle("1", "some title1 - CHANGED"));
            expect(resultingState).to.deep.equal(expectedState);
        });
    });
});

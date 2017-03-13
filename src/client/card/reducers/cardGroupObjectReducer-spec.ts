import { ICardGroupProps } from "../model";
import cardGroupObjectReducer from "./cardGroupObjectReducer";
import { CardGroupActions } from "../actions";

import * as chai from "chai";
const expect = chai.expect;

describe("cardGroupObjectReducer", () => {
    describe("CHANGE_CARDGROUP_TITLE dispatched", () => {
        it("set's the new title in the cardgroup", () => {
            const initialstate: ICardGroupProps = {
                    id: "1",
                    ui: {},
                    title: "some title1",
                    status: "OK",
                    order: 0,
            };
            const expectedState: ICardGroupProps = {
                    id: "1",
                    ui: {},
                    title: "some title1 - CHANGED",
                    status: "OK",
                    order: 0,
            };
            const resultingState = cardGroupObjectReducer(initialstate, CardGroupActions.changeCardGroupTitle("1", "some title1 - CHANGED"));
            expect(resultingState).to.deep.equal(expectedState);
        });
    });
});

import { ICardGroupModel } from "../model/cardGroupModel";
import cardGroupsReducer from "./cardGroupsReducer";
import { CardGroupActions } from "../actions";

import * as chai from "chai";
const { expect } = chai;

describe("cardGroupsReducer", () => {
    describe("ADD_CARDGROUP dispatched", () => {
        it("initial state contains added cardgroup", () => {
            const testTitle = "some title";
            const state = cardGroupsReducer(undefined, CardGroupActions.addCardGroup(testTitle));
            expect(state).to.have.length(1);
            expect(state[0].title).to.equal(testTitle);
        });
    });

    describe("ARCHIVE_CARDGROUP dispatched", () => {
        it("state doesnt contain removed cardgroup", () => {
            const testId = "1";
            const initialstate: ICardGroupModel[] = [{
                    id: testId,
                    ui: {},
                    title: "some title",
                    status: "OK",
                }];
            const state = cardGroupsReducer(initialstate, CardGroupActions.archiveCardGroup(testId));
            expect(state).to.have.length(0);
        });
    });

    describe("CHANGE_CARDGROUP_TITLE dispatched", () => {
        it("set's the new title in the cardgroup by passing the action to the cardGroupObjectReducer", () => {
            const initialstate: ICardGroupModel[] = [{
                    id: "0",
                    ui: {},
                    title: "some title0",
                    status: "OK",
                },
                {
                    id: "1",
                    ui: {},
                    title: "some title1",
                    status: "OK",
                },
                {
                    id: "2",
                    ui: {},
                    title: "some title2",
                    status: "OK",
                }];
            const expectedState: ICardGroupModel[] = [{
                    id: "0",
                    ui: {},
                    title: "some title0",
                    status: "OK",
                },
                {
                    id: "1",
                    ui: {},
                    title: "some title1 - CHANGED",
                    status: "OK",
                },
                {
                    id: "2",
                    ui: {},
                    title: "some title2",
                    status: "OK",
                }];
            const resultingState = cardGroupsReducer(initialstate, CardGroupActions.changeCardGroupTitle("1", "some title1 - CHANGED"));
            expect(resultingState).to.deep.equal(expectedState);
        });
    });
});

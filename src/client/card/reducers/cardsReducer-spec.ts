import { ICardModel, CardParent_CardGroup } from "../model/cardModel";
import cardsReducer from "./cardsReducer";
import { CardActions } from "../actions";

import * as chai from "chai";
const expect = chai.expect;

describe("cardsReducer", () => {
    describe("ADD_CARD dispatched", () => {
        it("initial state contains added card", () => {
            const testTitle = "some title";
            const state = cardsReducer(undefined, CardActions.addCard("CardGroup", "1", testTitle));
            expect(state).to.have.length(1);
            expect(state[0].title).to.equal(testTitle);
        });
    });

    describe("ARCHIVE_CARD dispatched", () => {
        it("state doesnt contain removed card", () => {
            const testId = {
                        id: "1",
                        parentType: CardParent_CardGroup,
                        parentId:  "1",
                    };
            const initialstate: ICardModel[] = [{
                    id: testId,
                    title: "some title",
                    status: "OK",
                }];
            const state = cardsReducer(initialstate, CardActions.archiveCard(testId));
            expect(state).to.have.length(0);
        });
    });

    describe("CHANGE_CARD_TITLE dispatched", () => {
        it("set's the new title in the card by passing the action to the cardObjectReducer", () => {
            const initialstate: ICardModel[] = [{
                    id: { id: "0",
                    parentType: CardParent_CardGroup,
                    parentId:  "1" },
                    title: "some title0",
                    status: "OK",
                },
                {
                    id: { id: "1",
                    parentType: CardParent_CardGroup,
                    parentId:  "1" },
                    title: "some title1",
                    status: "OK",
                },
                {
                    id: { id: "2",
                    parentType: CardParent_CardGroup,
                    parentId:  "1" },
                    title: "some title2",
                    status: "OK",
                }];
            const expectedState: ICardModel[] = [{
                    id: { id: "0",
                    parentType: CardParent_CardGroup,
                    parentId:  "1" },
                    title: "some title0",
                    status: "OK",
                },
                {
                    id: { id: "1",
                    parentType: CardParent_CardGroup,
                    parentId:  "1" },
                    title: "some title1 - CHANGED",
                    status: "OK",
                },
                {
                    id: { id: "2",
                    parentType: CardParent_CardGroup,
                    parentId: "1" },
                    title: "some title2",
                    status: "OK",
                }];
            const cardId1 = {
                id: "1",
                parentType: CardParent_CardGroup,
                parentId:  "1",
            };
            const resultingState = cardsReducer(initialstate, CardActions.changeCardTitle(cardId1, "some title1 - CHANGED"));
            expect(resultingState).to.deep.equal(expectedState);
        });
    });
});

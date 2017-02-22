import { ICardGroupModel, ICardModel, CardParent_CardGroup } from "../model";
import cardObjectReducer from "./cardObjectReducer";
import { CardActions } from "../actions";

import * as chai from "chai";
const expect = chai.expect;

describe("cardObjectReducer", () => {
    describe("CHANGE_CARD_TITLE dispatched", () => {
        it("set's the new title in the card", () => {
            const cardId = {
                        id: "1",
                        parentType: CardParent_CardGroup,
                        parentId:  "1",
                    };
            const initialstate: ICardModel = {
                    id: cardId,
                    ui: {},
                    title: "some title1",
                    status: "OK",
            };
            const expectedState: ICardModel = {
                    id: cardId,
                    ui: {},
                    title: "some title1 - CHANGED",
                    status: "OK",
            };
            const resultingState = cardObjectReducer(initialstate, CardActions.changeCardTitle(cardId, "some title1 - CHANGED"));
            expect(resultingState).to.deep.equal(expectedState);
        });
    });
});

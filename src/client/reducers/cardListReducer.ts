import { OtherAction } from "../constants";
import { ActionDefs } from "../constants/card";
import { CardGroupState, CardState } from "../state/card";
import { Constants as CardConstants } from "../constants/card";

type CardAction =
    ActionDefs.AddCardAction |
    ActionDefs.ArchiveCardAction |
    ActionDefs.EditCardTitleAction |
    OtherAction;

const INITIAL_STATE = new CardGroupState();

const cardListReducer = (state: CardGroupState = INITIAL_STATE, action: CardAction = OtherAction): CardGroupState => {
    switch (action.type) {
        case CardConstants.ADD_CARD:
            return state.addCard(new CardState({ title: action.title }));
        case CardConstants.ARCHIVE_CARD:
            return state.archiveCard(action.id);
        case CardConstants.EDIT_CARD_TITLE:
            const card = state.getCard(action.id);
            return state.updateCard(card.with({ title: action.title }));
        default:
            return state;
    }
}

export default cardListReducer;

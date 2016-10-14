import { OtherAction } from "../constants";
import { ActionDefs } from "../constants/card";
import { CardListModel } from "../model/card";

type CardAction =
    ActionDefs.AddCardAction |
    ActionDefs.ArchiveCardAction |
    ActionDefs.EditCardTitleAction |
    OtherAction;

const INITIAL_STATE = new CardListModel();

function cardListReducer(state = INITIAL_STATE, action: CardAction = OtherAction): CardListModel {

}
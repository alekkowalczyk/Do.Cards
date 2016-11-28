import * as Constants from "./cardActionConstants";
import * as ActionDefs from "./cardActionDefs";


export function cardTitleChanged(id: string, title: string): ActionDefs.CardTitleChangedAction {
    return {
        type: Constants.CARD_ACTION,
        subType: Constants.CARD_TITLE_CHANGED,
        id: id,
        title: title,
    };
}

export function changeCardTitle(id: string, title: string): ActionDefs.ChangeCardTitleAction {
    return {
        type: Constants.CARD_ACTION,
        subType: Constants.CHANGE_CARD_TITLE,
        id: id,
        title: title,
    };
}

import * as Constants from "./cardModuleActionConstants";
import * as ActionDefs from "./cardModuleActionDefs";
import { HoverType } from "../model/cardModuleUiModel";
import { ICardId } from "../model/cardModel";

export function hoveringCard(id: ICardId, isHover: boolean, type: HoverType): ActionDefs.HoveringCardAction {
    return {
        type: Constants.HOVERING_CARD,
        cardId: id,
        isHovering: isHover,
        hoverType: type,
    };
}
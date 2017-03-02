import * as Constants from "./cardModuleActionConstants";
import * as ActionDefs from "./cardModuleActionDefs";
import { IHoveringCard } from "../model/cardModuleUiModel";
import { ICardProps } from "../model/cardModel";

export function hoveringCard(options?: IHoveringCard): ActionDefs.HoveringCardAction {
    if (options) {
        return {
            type: Constants.HOVERING_CARD,
            hoveredOver: options.hoveringOver,
            hoveringCard: options.hoveringCard,
            hoverType: options.hoverType,
      };
    }
    return {
            type: Constants.HOVERING_CARD,
    };
};

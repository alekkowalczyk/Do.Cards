import * as Constants from "./cardModuleActionConstants";
import * as ActionDefs from "./cardModuleActionDefs";
import { IHoveringCard, IHoveringCardGroup } from "../model/cardModuleUiModel";

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

export function hoveringCardGroup(options?: IHoveringCardGroup): ActionDefs.HoveringCardGroupAction {
    if (options) {
        return {
            type: Constants.HOVERING_CARDGROUP,
            hoveredOver: options.hoveringOver,
            hoveringCardGroup: options.hoveringCardGroup,
            hoverType: options.hoverType,
      };
    }
    return {
            type: Constants.HOVERING_CARDGROUP,
    };
};

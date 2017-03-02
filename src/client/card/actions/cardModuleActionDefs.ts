import { ICardId } from "../model/cardModel";
import { HoverType } from "../model/cardModuleUiModel";
import * as Constants from "./cardModuleActionConstants";

export type HoveringCardAction = {
        type: Constants.HOVERING_CARD,
        cardId: ICardId,
        isHovering: boolean,
        hoverType?: HoverType,
    };

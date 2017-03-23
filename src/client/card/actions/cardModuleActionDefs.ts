import { ICardProps } from "../model/cardModel";
import { ICardGroupProps} from "../model/cardGroupModel";
import { CardHoverType, CardGroupHoverType } from "../model/cardModuleUiModel";
import * as Constants from "./cardModuleActionConstants";

export type HoveringCardAction = {
        type: Constants.HOVERING_CARD,
        hoveringCard?: ICardProps,
        hoveredOver?: ICardProps,
        hoverType?: CardHoverType,
    };

export type HoveringCardGroupAction = {
    type: Constants.HOVERING_CARDGROUP,
    hoveringCardGroup?: ICardGroupProps,
    hoveredOver?: ICardGroupProps,
    hoverType?: CardGroupHoverType,
};

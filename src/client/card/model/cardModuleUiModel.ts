import { ICardProps } from "./cardModel";
import { ICardGroupProps } from "./cardGroupModel";

export type CardHoverType = "TOP" | "BOTTOM" | "NONE";
export interface IHoveringCard {
        hoveringCard?: ICardProps;
        hoveringOver?: ICardProps;
        hoverType?: CardHoverType;
}

export type CardGroupHoverType = "LEFT" | "RIGHT" | "NONE";
export interface IHoveringCardGroup {
    hoveringCardGroup?: ICardGroupProps;
    hoveringOver?: ICardGroupProps;
    hoverType?: CardGroupHoverType;
}

export interface ICardModuleUI {
    hoveringCard: IHoveringCard;
}

const getEmptyCardModuleUI = (): ICardModuleUI => {
    return { hoveringCard: {} };
};
export { getEmptyCardModuleUI };

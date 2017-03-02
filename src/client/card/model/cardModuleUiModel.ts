import { ICardProps } from "./cardModel";

export type HoverType = "TOP" | "BOTTOM" | "NONE";
export interface IHoveringCard {
        hoveringCard?: ICardProps;
        hoveringOver?: ICardProps;
        hoverType?: HoverType;
}
export interface ICardModuleUI {
    hoveringCard: IHoveringCard;
}

const getEmptyCardModuleUI = (): ICardModuleUI => {
    return { hoveringCard: {} };
};
export { getEmptyCardModuleUI };

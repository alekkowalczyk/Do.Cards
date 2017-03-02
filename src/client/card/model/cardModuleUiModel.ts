import { ICardId } from "./cardModel";

export type HoverType = "TOP" | "BOTTOM";
export interface IHoveringCard {
        isHovering?: boolean;
        hoveringOver?: ICardId;
        hoverType?: HoverType;
}
export interface ICardModuleUI {
    hoveringCard: IHoveringCard;
}

const getEmptyCardModuleUI = (): ICardModuleUI => {
    return { hoveringCard: {} };
};
export { getEmptyCardModuleUI };

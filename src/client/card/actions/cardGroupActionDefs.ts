import { QId } from "../../common";
import * as Constants from "./cardGroupActionConstants";

export type AddCardAction = {
            type: Constants.ADD_CARD,
            title: string,
        };

export type ArchiveCardAction = {
            type: Constants.ARCHIVE_CARD,
        } & QId;

import {
    ADD_CARD,
    AddCardAction,
    ARCHIVE_CARD,
    ArchiveCardAction,
    EDIT_CARD_TITLE,
    EditCardTitleAction,
} from "../constants/cardActionConstants";

export function addCard(title: string): AddCardAction {
    return {
        type: ADD_CARD,
        title: title,
    };
}

export function editCardTitle(id: string, title: string): EditCardTitleAction {
    return {
        type: EDIT_CARD_TITLE,
        id: id,
        title: title,
    };
}

export function archiveCard(id: string): ArchiveCardAction {
    return {
        type: ARCHIVE_CARD,
        id: id,
    };
}

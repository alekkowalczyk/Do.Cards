// Main type:
export type ARCHIVE_CARD = "Card/ARCHIVE_CARD";
export const ARCHIVE_CARD: ARCHIVE_CARD = "Card/ARCHIVE_CARD";

export type CARD_ACTION = "Card/CARD_ACTION";
export const CARD_ACTION: CARD_ACTION = "Card/CARD_ACTION";

// This is not a CARD_ACTION only a main type, because it alters not only one card
// by setting the displayEmptyCardAbove flag to true, but also other card to set 
// it to false (if it were set to true earlier)
export type DISPLAY_EMPTY_CARD_ABOVE = "Card/DISPLAY_EMPTY_CARD_ABOVE";
export const DISPLAY_EMPTY_CARD_ABOVE: DISPLAY_EMPTY_CARD_ABOVE = "Card/DISPLAY_EMPTY_CARD_ABOVE";

// This is not a CARD_ACTION only a main type, because it alters not only one card
// by setting the order, but also makes according order changes in subsequent cards
export type MOVE_CARD = "Card/MOVE_CARD";
export const MOVE_CARD: MOVE_CARD = "Card/MOVE_CARD";

export type DISPLAY_EMPTY_AT_BOTTOM = "Card/DISPLAY_EMPTY_AT_BOTTOM";
export const DISPLAY_EMPTY_AT_BOTTOM: DISPLAY_EMPTY_AT_BOTTOM = "Card/DISPLAY_EMPTY_AT_BOTTOM";

// ====================================================
// Card subtypes for CARD_ACTION (card object actions):
export type CARD_TITLE_CHANGED = "Card/CARD_TITLE_CHANGED";
export const CARD_TITLE_CHANGED: CARD_TITLE_CHANGED = "Card/CARD_TITLE_CHANGED";

export type CHANGE_CARD_TITLE = "Card/CHANGE_CARD_TITLE";
export const CHANGE_CARD_TITLE: CHANGE_CARD_TITLE = "Card/CHANGE_CARD_TITLE";

export type DISPLAY_EMPTY_SUB_CARD = "Card/DISPLAY_EMPTY_SUB_CARD";
export const DISPLAY_EMPTY_SUB_CARD: DISPLAY_EMPTY_SUB_CARD = "Card/DISPLAY_EMPTY_SUB_CARD";

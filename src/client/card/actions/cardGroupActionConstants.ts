// Main type:
export type ADD_CARDGROUP = "CardGroup/ADD_CARDGROUP";
export const ADD_CARDGROUP: ADD_CARDGROUP = "CardGroup/ADD_CARDGROUP";

export type INSERT_CARDGROUP = "CardGroup/INSERT_CARDGROUP";
export const INSERT_CARDGROUP: INSERT_CARDGROUP = "CardGroup/INSERT_CARDGROUP";

export type ARCHIVE_CARDGROUP = "CardGroup/ARCHIVE_CARDGROUP";
export const ARCHIVE_CARDGROUP: ARCHIVE_CARDGROUP = "CardGroup/ARCHIVE_CARDGROUP";

export type CARDGROUP_ACTION = "CardGroup/CARDGROUP_ACTION";
export const CARDGROUP_ACTION: CARDGROUP_ACTION = "CardGroup/CARDGROUP_ACTION";

// This is not a CARDGROUP_ACTION only a main type, because it alters not only one card
// by setting the order, but also makes according order changes in subsequent cards
export type MOVE_CARDGROUP = "CardGroup/MOVE_CARDGROUP";
export const MOVE_CARDGROUP: MOVE_CARDGROUP = "CardGroup/MOVE_CARDGROUP";

// CardGroup subtypes for CARDGROUP_ACTION (cardgroup object actions):
export type CARDGROUP_TITLE_CHANGED = "CardGroup/CARDGROUP_TITLE_CHANGED";
export const CARDGROUP_TITLE_CHANGED: CARDGROUP_TITLE_CHANGED = "CardGroup/CARDGROUP_TITLE_CHANGED";

export type CHANGE_CARDGROUP_TITLE = "CardGroup/CHANGE_CARDGROUP_TITLE";
export const CHANGE_CARDGROUP_TITLE: CHANGE_CARDGROUP_TITLE = "CardGroup/CHANGE_CARDGROUP_TITLE";

export type FORCE_DISPLAY_ADD_CARD = "CardGroup/FORCE_DISPLAY_ADD_CARD";
export const FORCE_DISPLAY_ADD_CARD: FORCE_DISPLAY_ADD_CARD = "CardGroup/FORCE_DISPLAY_ADD_CARD";

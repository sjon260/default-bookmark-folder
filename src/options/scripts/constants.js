'use strict';

/*
 * =================================================================================================
 * CONSTANTS
 * =================================================================================================
 */

// Boilerplate of all add-on options
const OPTIONS_BOILERPLATE = {
    [RELEASE]: {
        [OPEN_NOTES]: 'boolean',
    },
    [BUILTIN]: {
        [FOLDER]: 'string',
        [TOP]: 'boolean',
    },
    [ALLTABS]: {
        [FOLDER]: 'string',
        [TOP]: 'boolean',
    },
    [ICON]: {
        [ENABLED]: 'boolean',
        [SHORTCUT]: 'boolean',
        [CONTEXT_MENU]: 'boolean',
        [FOLDER]: 'string',
        [TOP]: 'boolean',
        [PREVENT_REMOVAL]: 'boolean',
        [COLOR]: 'string',
    },
    [MISC]: {
        [LAST_USED_FOLDER]: 'string',
    },
    [NOTIFICATION]: 'boolean', // Welcome message diplayed (at least once)
    [TAB]: 'integer',
    [NEW_RELEASE]: 'boolean', // This is a new version
};

// List of all add-on options IDs for selection
const OPTIONS_IDS = {
    [RELEASE]: {
        [OPEN_NOTES]: 'release-open-changelog',
    },
    [BUILTIN]: {
        [FOLDER]: 'builtin-folder',
        [TOP]: 'builtin-top',
    },
    [ALLTABS]: {
        [FOLDER]: 'alltabs-folder',
        [TOP]: 'alltabs-top',
    },
    [ICON]: {
        [ENABLED]: 'icon-enabled',
        [SHORTCUT]: 'icon-shortcut',
        [CONTEXT_MENU]: 'icon-context-menu',
        [FOLDER]: 'icon-folder',
        [TOP]: 'icon-top',
        [PREVENT_REMOVAL]: 'icon-prevent-removal',
        [COLOR]: 'icon-color',
    },
};

// List of tab management items
const TAB_DEFAULT_NUMBER = 1;
const TAB_CONTAINER = '#tab_container';
const TAB_MENU = '.tab_menu';
const TAB_CONTAINER_ITEM = '.container_item';
const DATA_ITEM = 'data-item';
const DATA_TAB = 'data-tab';

// Miscellaneous
const UNNAMED_FOLDER = '[no name]';
const WELCOME = '#welcome';
const CLOSE_WELCOME = '#close-welcome';
const DELETE_WELCOME = '#delete-welcome';
const VERSION = '#placeholder-version';
const AUTHOR = '#placeholder-author';

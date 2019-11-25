import {FETCH_SEARCH_REQUEST,
    TOGGLE_BANNER_PANEL,
    TOGGLE_CONTENT_PANEL,
    CLEAR_DATA_SERVER,
    USER_SEARCH_VALUE
} from '../constants/Actions';

export interface ActionTypeWithStringPayload{
    type: typeof FETCH_SEARCH_REQUEST | typeof TOGGLE_BANNER_PANEL | typeof TOGGLE_CONTENT_PANEL | typeof USER_SEARCH_VALUE
    payload: string;
}

export interface ActionTypeWithOutPayload{
    type: typeof CLEAR_DATA_SERVER
}
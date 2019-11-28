import {FETCH_SEARCH_REQUEST,
        TOGGLE_BANNER_PANEL,
        TOGGLE_CONTENT_PANEL,
        CLEAR_DATA_SERVER,
        FETCH_NEIGHBORHOOD_ITEMS,
        FETCH_SEARCH_RECEIVED,
        USER_SEARCH_VALUE
    } from '../constants/Actions';
import {ActionTypeWithStringPayload,ActionTypeWithOutPayload,ActionTypeWithArray} from '../types/actions';
import {SearchModal} from '../models/search';

export const searchResultRequest = (inputValue:string):ActionTypeWithStringPayload => ({type: FETCH_SEARCH_REQUEST, payload: inputValue});

export const searchResultReceived = (data:Array<SearchModal>):ActionTypeWithArray => ({type: FETCH_SEARCH_RECEIVED, payload: data})

export const toggleBannerPanel = (status:string):ActionTypeWithStringPayload => ({type:TOGGLE_BANNER_PANEL, payload: status});

export const toggleContentPanel = (status:string):ActionTypeWithStringPayload => ({type: TOGGLE_CONTENT_PANEL, payload: status});

export const clearDataFromServer = ():ActionTypeWithOutPayload => ({type: CLEAR_DATA_SERVER});

export const sendValueToStore = (itemValue:string):ActionTypeWithStringPayload => ({type: USER_SEARCH_VALUE, payload: itemValue})

export const sendDataToNeighborhood = ():any => ({type: FETCH_NEIGHBORHOOD_ITEMS});
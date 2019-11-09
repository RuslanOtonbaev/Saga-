export const searchResultRequest = inputValue => ({type: 'FETCH_SEARCH_REQUEST', payload: inputValue});

export const toggleBannerPanel = status => ({type:'TOGGLE_BANNER_PANEL', payload: status});

export const toggleContentPanel = status => ({type: 'TOGGLE_CONTENT_PANEL', payload: status});

export const clearDataFromServer = () => ({type: 'CLEAR_DATA_SERVER'});

export const sendValueToStore = itemValue => ({type: 'USER_SEARCH_VALUE', payload: itemValue})
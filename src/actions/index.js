export const searchResultRequest = inputValue => ({type: 'FETCH_SEARCH_REQUEST', payload: inputValue});

export const toggleBannerPanel = status => ({type:'TOGGLE_BANNER_PANEL', payload: status})
const AppReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, series: action.payload.series, movies: action.payload.movies };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'SET_FILTER_YEAR':
            return { ...state, filterYear: action.payload };
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payload };
        case 'SET_PAGE_SIZE':
            return { ...state, pageSize: action.payload };
        default:
            return state;
    }
};

export default AppReducer;

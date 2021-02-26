import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    loading: true,
    err: null,
    stats: {}
}

const statistics = (state = initialState, { type, payload }) => {
    switch (type) {

    case ActionTypes.STATS_LOADING:
        return { ...state, loading: true };

    case ActionTypes.STATS_ERROR:
        return { ...state, loading: false, err: payload };

    case ActionTypes.STATS_LOADED:
        return { ...state, loading: false, err: null, stats: payload };

    default:
        return state;
    }
}

export default statistics;

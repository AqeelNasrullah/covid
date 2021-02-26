import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    loading: true,
    err: null,
    histories: {}
}

const histories = (state = initialState, { type, payload }) => {
    switch (type) {

    case ActionTypes.HISTORY_LOADING:
        return { ...state, loading: true };

    case ActionTypes.HISTORY_ERROR:
        return { ...state, loading: false, err: payload };

    case ActionTypes.HISTORY_LOADED:
        return { ...state, loading: false, err: null, histories: payload };

    default:
        return state
    }
}

export default histories;
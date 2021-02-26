import * as ActionTypes from './ActionTypes';
import { RAPIDAPI_HOST, RAPIDAPI_KEY } from '../../conf/conf';

export const fetchStats = () => dispatch => {
    dispatch({
        type: ActionTypes.STATS_LOADING
    })

    return fetch('https://covid-193.p.rapidapi.com/statistics', {
        "method": 'GET',
        "headers": {
            'x-rapidapi-key': RAPIDAPI_KEY,
            'x-rapidapi-host': RAPIDAPI_HOST
        }
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            let msg = new Error(`Error ${response.status}: ${response.statusText}`);
            msg.response = response;
            throw msg;
        }
    }, error => {
        let msg = new Error(error.message);
        throw msg;
    })
    .then(response => response.json())
    .then(stats => dispatch({
        type: ActionTypes.STATS_LOADED,
        payload: stats
    }))
    .catch(error => dispatch({
        type: ActionTypes.STATS_ERROR,
        payload: error.message
    }));
}

export const fetchHistories = (country = 'Pakistan') => dispatch => {
    dispatch({ type: ActionTypes.HISTORY_LOADING });

    return fetch(`https://${ RAPIDAPI_HOST }/history?country=${country}`, {
        "method": 'GET',
        "headers": {
            'x-rapidapi-key': RAPIDAPI_KEY,
            'x-rapidapi-host': RAPIDAPI_HOST
        }
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            let msg = new Error(`Error ${response.status}: ${response.statusText}`);
            msg.response = response;
            throw msg;
        }
    }, error => {
        let msg = new Error(error.message);
        throw msg;
    })
    .then(response => response.json())
    .then(histories => dispatch({
        type: ActionTypes.HISTORY_LOADED,
        payload: histories
    }))
    .catch(error => dispatch({
        type: ActionTypes.HISTORY_ERROR,
        payload: error.message
    }));
}
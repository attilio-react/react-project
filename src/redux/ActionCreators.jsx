import {SEARCH_BY} from './ActionTypes.jsx'

export function searchBy(by) {
    return {
        type: SEARCH_BY,
        payload: {
            by: by
        }
    }
}



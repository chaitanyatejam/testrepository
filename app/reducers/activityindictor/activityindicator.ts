
import { SHOW_INDICATOR, HIDE_INDICATOR } from '../../actions/constants';

const initialState = {
    showIndicator: false
}

export function activityIndicatorReducer(state: {}, action: any) {
    if (action.type === SHOW_INDICATOR)
        return { ...state, showIndicator: true }
    else if (action.type === HIDE_INDICATOR)
        return { ...state, showIndicator: false }
    return initialState;

}
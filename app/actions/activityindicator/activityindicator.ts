
import { SHOW_INDICATOR, HIDE_INDICATOR } from '../constants';

export function showActivityIndicator() {
    return { type: SHOW_INDICATOR }
}

export function hideActivityIndicator() {
    return { type: HIDE_INDICATOR }
}

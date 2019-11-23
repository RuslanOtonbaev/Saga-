import {BUY,RENT} from '../constants/Banner';

interface Styles{
    [key:string]: string
}

export const classReturner = (toggleStatus: string, styles: Styles) => {
    if(toggleStatus === BUY || toggleStatus === RENT){
        return [styles.toggle_button,styles.active_button].join(' ')
    };

    return styles.toggle_button;
}

export const togglerSideStatus = (toggleStatus: string, styles: Styles) => {
    if(toggleStatus === BUY){
        return styles.toggle_left_wrapper
    }

    return styles.toggle_right_wrapper
}
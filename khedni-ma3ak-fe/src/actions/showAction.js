import {SHOW_ALL_PLACES,SHOW_SEARCHED_PLACES} from '../types';


export const showAllAction = () => {
    return({
        type: SHOW_ALL_PLACES,
    })
}

// export const showVisitedAction = () => {
//     return({
//         type: SHOW_SEARCHED_PLACES,
//     })
// }
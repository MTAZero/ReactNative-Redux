import {Inc, Dec} from '../Action/ActionType.js';


const counterReducer = (cnt = 995, action) => {
    switch (action.type) {
        case Inc:
            return cnt+action.step;
            break;

        case Dec:
            return cnt-action.step;
            break;
    
        default:
            return cnt;
            break;
    }
}

export default counterReducer;
import {Inc, Dec, Reset} from '../Action/ActionType.js';


const counterReducer = (cnt = 1000, action) => {
    switch (action.type) {
        case Inc:
            return cnt+action.step;
            break;

        case Dec:
            return cnt-action.step;
            break;
        
        case Reset:
            return 1000;
            break;
    
        default:
            return cnt;
            break;
    }
}

export default counterReducer;
import {Inc, Dec} from './ActionType.js';

let id = 0;

export const incCnt = (step) => {
    return {
        type: Inc,
        step: step
    };
}

export const decCnt = (step) => {
    return {
        type: Dec,
        step: step
    };
}


import {Inc, Dec, Reset} from './ActionType.js';

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

export const resetCnt = () => {
    return {
        type: Reset
    }
}


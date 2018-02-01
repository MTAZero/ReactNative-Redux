import Counter from '../Components/counter.js';
import { connect } from 'react-redux';
import { incCnt, decCnt, resetCnt} from '../Action';

const mapStateToProps = (state) => {
    console.log(state);
    return {
        cnt: state.counterReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addClick: (step) => {
            dispatch(incCnt(step));
        },
        decClick: (step) => {
            dispatch(decCnt(step));
        },
        resetClick: () => {
            dispatch(resetCnt())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
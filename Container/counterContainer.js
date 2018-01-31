import Counter from '../Components/counter.js';
import { connect } from 'react-redux';
import { incCnt, decCnt} from '../Action';

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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
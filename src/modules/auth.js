import {createAction, handleActions} from 'redux-actions';

//우선 리듀서의 틀만 만들어 내보낸다.
const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';

export const sampleAction = createAction(SAMPLE_ACTION);

const initialState = {};

const auth = handleActions(
    {
        [SAMPLE_ACTION]: (state, action) => state,
    },
    initialState,
);

export default auth;
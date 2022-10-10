const INCR = "INCR",
    DECR = "DECR",
    ADD = "ADD",
    DEL = "DEL";

const initialState = {
    count: 0,
    todos: [`лол`, `обделаться по полной программе`],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCR:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECR:
            return {
                ...state,
                count: state.count + 1,
            };
        case ADD:
            return {
                ...state,
                todos: [...state.todos, action.pauload],
            };
        case DEL:
            return {
                ...state,
                todos: [...state.todos.slice(0, state.todos.length - 1)],
            };
        default:
            return state;
    }
}

export const incr = () => ({ type: INCR }),
    decr = () => ({ type: DECR }),
    add = () => ({ type: ADD }),
    del = () => ({ type: DEL });

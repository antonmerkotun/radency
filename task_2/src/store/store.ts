import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {tasksReducer} from "./reducers/tasksReducer";


export const rootReducer = combineReducers({
    tasks: tasksReducer,
})

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.navigator.userAgent.includes('Chrome') ?
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION__() : compose,
    ),
);
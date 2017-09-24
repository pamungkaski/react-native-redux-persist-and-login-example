/**
 * Created by iampamungkas on 9/22/17.
 */
import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { autoRehydrate } from 'redux-persist'
import rootReducer from '../reducers/rootReducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        compose(
            autoRehydrate(),
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            )
        )
    )
}

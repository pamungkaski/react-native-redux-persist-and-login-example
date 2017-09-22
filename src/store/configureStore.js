/**
 * Created by iampamungkas on 9/22/17.
 */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { autroRehydrate } from 'redux-persist'
import rootReducers from '../reducers/rootReducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
        rootReducers,
        preloadedState,
        autroRehydrate,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}

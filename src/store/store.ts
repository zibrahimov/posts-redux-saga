import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
}

const store = configureStore();
sagaMiddleware.run(rootSaga);

export default store;

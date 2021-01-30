import { all, spawn, Effect } from 'redux-saga/effects';
import postSaga from "./postSaga";

export default function* rootSaga() {
  yield all([
    spawnEffects(postSaga),
  ]);
};

function spawnEffects(effects: Effect[]) {
  return spawn(function* () {
    yield all(effects);
  });
};

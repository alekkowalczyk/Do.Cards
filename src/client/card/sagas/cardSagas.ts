import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { ActionConstants, Actions } from "../actions";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

function * handleCardTitleChanged(options: {id: string, title: string}) {
    yield put(Actions.changeCardTitle(options.id, options.title));
    yield call(delay, 500);
    console.log("AJAX CALL!!!", options);
}

function* watchCardTitleChanged() {
  // will cancel current running handleInput task
  yield takeLatest(ActionConstants.CARD_TITLE_CHANGED, handleCardTitleChanged);
};

export default function* rootSaga() {
    yield [
        watchCardTitleChanged(),
    ];
}

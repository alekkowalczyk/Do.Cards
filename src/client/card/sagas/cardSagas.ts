import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { CardActionConstants, CardActions, CardActionDefs } from "../actions";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export { delay };
export function* handleCardTitleChanged(options: {id: string, title: string}) {
    yield put(CardActions.changeCardTitle(options.id, options.title));
    yield call(delay, 500);
    console.log("AJAX CALL!!!", options);
}

function* watchCardTitleChanged() {
  // will cancel current running handleInput task
  yield takeLatest<CardActionDefs.CardTitleChangedAction>(
      t => t.type === CardActionConstants.CARD_ACTION && t.subType === CardActionConstants.CARD_TITLE_CHANGED,
      handleCardTitleChanged);
};

export default function* rootSaga() {
    yield [
        watchCardTitleChanged(),
    ];
}

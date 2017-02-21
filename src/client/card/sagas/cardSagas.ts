import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { sagaUtils } from "../../common";
import { ICardId } from "../model/cardModel";
import { CardActionConstants, CardActions, CardActionDefs } from "../actions";

const { delay } = sagaUtils;

export function* handleCardTitleChanged(options: {id: ICardId, title: string}) {
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

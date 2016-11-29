import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { sagaUtils } from "../../common";
import { CardGroupActionConstants, CardGroupActions, CardGroupActionDefs } from "../actions";

const { delay } = sagaUtils;

export function* handleCardGroupTitleChanged(options: {id: string, title: string}) {
    yield put(CardGroupActions.changeCardGroupTitle(options.id, options.title));
    yield call(delay, 500);
    console.log("AJAX CALL!!!", options);
}

function* watchCardGroupTitleChanged() {
  // will cancel current running handleInput task
  yield takeLatest<CardGroupActionDefs.CardGroupTitleChangedAction>(
      t => t.type === CardGroupActionConstants.CARDGROUP_ACTION && t.subType === CardGroupActionConstants.CARDGROUP_TITLE_CHANGED,
      handleCardGroupTitleChanged);
};

export default function* rootSaga() {
    yield [
        watchCardGroupTitleChanged(),
    ];
}

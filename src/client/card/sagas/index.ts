import cardGroupSagas from "./cardSagas";

export default function* rootSaga() {
    yield [
        cardGroupSagas(),
    ];
}

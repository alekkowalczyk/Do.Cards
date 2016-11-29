import cardSagas from "./cardSagas";
import cardGroupSagas from "./cardGroupSagas";

export default function* rootSaga() {
    yield [
        cardSagas(),
        cardGroupSagas(),
    ];
}

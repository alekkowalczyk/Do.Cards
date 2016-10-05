import { AlertTest } from './des';

const button = document.getElementById("testing");
if(button !== null) {
    (button).addEventListener("click", (ev) => {
        AlertTest();
    });
}
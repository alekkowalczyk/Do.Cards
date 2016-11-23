"use strict";
const React = require("react");
const _ = require("lodash");
class CardComponent extends React.Component {
    constructor() {
        super();
        this.callTitleChangedProps = _.debounce(this.callTitleChangedProps, 1000);
    }
    render() {
        return React.createElement("div", { style: { border: "solid 1px black" } },
            React.createElement("p", null, "Card"),
            React.createElement("input", { value: this.props.title, onChange: this.titleChanged.bind(this) }),
            React.createElement("button", { onClick: this.props.remove }, "X"));
    }
    callTitleChangedProps(str) {
        this.props.titleChanged(str);
    }
    titleChanged(e) {
        this.callTitleChangedProps(e.target.value);
    }
}
exports.CardComponent = CardComponent;
//# sourceMappingURL=cardComponent.js.map
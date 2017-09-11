"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
;
const toDoList = ["task1", "task2", "task3"];
class Hello extends React.Component {
    render() {
        return (React.createElement("ul", null,
            React.createElement("li", null, "task1"),
            React.createElement("li", null, "task2")));
    }
    getTasks() {
        return toDoList;
    }
}
exports.default = Hello;
//# sourceMappingURL=Hello.js.map
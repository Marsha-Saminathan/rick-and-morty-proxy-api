"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function sortBy(order, key) {
    return rxjs_1.pipe(operators_1.switchMap((arr) => arr.sort((a, b) => {
        if (order === 'DESC') {
            return b[key] - a[key];
        }
        return a[key] - b[key];
    })));
}
exports.default = sortBy;
//# sourceMappingURL=sortBy.js.map
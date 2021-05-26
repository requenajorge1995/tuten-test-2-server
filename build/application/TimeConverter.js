"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeConverter = void 0;
const Time_1 = require("../domain/Time");
class TimeConverter {
    constructor(convertTo, name) {
        this.convertTo = convertTo;
        this.name = name;
    }
    run(timeString, timeZone) {
        const originalTime = Time_1.Time.createFromString(timeString);
        const convertedTime = originalTime.addHours(this.convertTo - timeZone);
        return {
            time: convertedTime.toString(),
            timeZone: this.name || this.convertTo.toString(),
        };
    }
}
exports.TimeConverter = TimeConverter;

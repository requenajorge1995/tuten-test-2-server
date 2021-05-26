"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
class Time {
    constructor(totalSeconds) {
        this.totalSeconds = totalSeconds;
    }
    static createFromString(timeString) {
        const [hours, minutes, seconds] = timeString
            .split(':')
            .map((num) => parseInt(num));
        if (hours < 0 || hours >= 24)
            throw new Error('Bad hours format. 0 >= HOURS < 24');
        if (minutes < 0 || minutes >= 60)
            throw new Error('Bad minutes format. 0 >= MINUTES < 60');
        if (seconds < 0 || seconds >= 60)
            throw new Error('Bad seconds format. 0 >= SECONDS < 60');
        return new Time(hours * 3600 + minutes * 60 + seconds);
    }
    addHours(hours) {
        var newTotalSeconds = this.totalSeconds + hours * 3600;
        //to not break when hours >= 24 hours
        newTotalSeconds %= 24 * 3600;
        //to not break when hours <= -24 hours
        while (newTotalSeconds < 0)
            newTotalSeconds += 24 * 3600;
        return new Time(newTotalSeconds);
    }
    toString() {
        const seconds = this.totalSeconds % 60;
        const totalMinutes = (this.totalSeconds - seconds) / 60;
        const minutes = totalMinutes % 60;
        const hours = Math.trunc(totalMinutes / 60);
        return `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
        function twoDigits(value) {
            return value >= 10 ? value.toString() : '0' + value;
        }
    }
}
exports.Time = Time;

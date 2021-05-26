"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Time_1 = require("./Time");
describe('Time', () => {
    it('Should create time object from string', () => {
        const time = Time_1.Time.createFromString('17:30:00');
        expect(time.totalSeconds).toBe(63000);
    });
    it('Should get right time string from seconds', () => {
        const time = new Time_1.Time(80705);
        expect(time.toString()).toBe('22:25:05');
    });
    it('Should thrown error when bad format', () => {
        expect(() => Time_1.Time.createFromString('28:30:20')).toThrow('Bad hours format. 0 >= HOURS < 24');
        expect(() => Time_1.Time.createFromString('22:60:10')).toThrow('Bad minutes format. 0 >= MINUTES < 60');
        expect(() => Time_1.Time.createFromString('13:05:71')).toThrow('Bad seconds format. 0 >= SECONDS < 60');
    });
    it('Should add hours', () => {
        const time = Time_1.Time.createFromString('08:45:11').addHours(3);
        expect(time.toString()).toBe('11:45:11');
    });
    it('Should add 24 hours or more', () => {
        const time1 = Time_1.Time.createFromString('08:45:11').addHours(24);
        expect(time1.toString()).toBe('08:45:11');
        const time2 = Time_1.Time.createFromString('10:20:00').addHours(26);
        expect(time2.toString()).toBe('12:20:00');
    });
    it('Should substract hours', () => {
        const time = Time_1.Time.createFromString('05:55:00').addHours(-3);
        expect(time.toString()).toBe('02:55:00');
    });
    it('Should substract 24 hours or less', () => {
        const time1 = Time_1.Time.createFromString('09:15:10').addHours(-24);
        expect(time1.toString()).toBe('09:15:10');
        const time2 = Time_1.Time.createFromString('15:10:00').addHours(-29);
        expect(time2.toString()).toBe('10:10:00');
    });
});

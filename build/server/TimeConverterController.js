"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeConverterController = void 0;
const TimeConverter_1 = require("../application/TimeConverter");
const express_validator_1 = require("express-validator");
class TimeConverterController {
    constructor() {
        this.timeConverter = new TimeConverter_1.TimeConverter(0, 'UTC');
        this.run = this.run.bind(this);
    }
    run(request, response) {
        const { time, timeZone } = request.body;
        const errors = express_validator_1.validationResult(request).array();
        try {
            if (errors.length)
                throw new Error(`${errors[0].param} ${errors[0].msg}`.toLowerCase());
            response.json({ response: this.timeConverter.run(time, timeZone) });
        }
        catch (error) {
            response.status(400).send(error.message);
        }
    }
}
exports.TimeConverterController = TimeConverterController;

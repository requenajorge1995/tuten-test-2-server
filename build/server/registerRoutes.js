"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const TimeConverterController_1 = require("./TimeConverterController");
const express_validator_1 = require("express-validator");
function registerRoutes(app) {
    const timeConverterController = new TimeConverterController_1.TimeConverterController();
    app.post('/', express_validator_1.body('time').matches(/^\d\d:\d\d:\d\d$/), express_validator_1.body('timeZone').isNumeric(), timeConverterController.run);
}
exports.registerRoutes = registerRoutes;

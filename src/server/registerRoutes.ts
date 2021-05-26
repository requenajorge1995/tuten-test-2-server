import { Express } from 'express';
import { TimeConverterController } from './TimeConverterController';
import { body } from 'express-validator';

export function registerRoutes(app: Express) {
  const timeConverterController = new TimeConverterController();
  app.post(
    '/',
    body('time').matches(/^\d\d:\d\d:\d\d$/),
    body('timeZone').isNumeric(),
    timeConverterController.run
  );
}

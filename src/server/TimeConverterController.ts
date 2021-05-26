import { Request, Response } from 'express';
import { TimeConverter } from '../application/TimeConverter';
import { validationResult } from 'express-validator';

export class TimeConverterController {
  private timeConverter: TimeConverter;

  constructor() {
    this.timeConverter = new TimeConverter(0, 'UTC');
    this.run = this.run.bind(this);
  }

  public run(request: Request, response: Response): void {
    const { time, timeZone } = request.body;
    const errors = validationResult(request).array();

    try {
      if (errors.length)
        throw new Error(`${errors[0].param} ${errors[0].msg}`.toLowerCase());

      response.json({ response: this.timeConverter.run(time, timeZone) });
    } catch (error) {
      response.status(400).send(error.message);
    }
  }
}

import { Time } from "../domain/Time";

export class TimeConverter {
  constructor(private convertTo: number, private name?: string) {}

  public run(timeString: string, timeZone: number) {
    const originalTime = Time.createFromString(timeString);
    const convertedTime = originalTime.addHours(this.convertTo - timeZone);

    return {
      time: convertedTime.toString(),
      timeZone: this.name || this.convertTo.toString(),
    };
  }
}

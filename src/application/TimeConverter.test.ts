import { TimeConverter } from "./TimeConverter";

describe("Time", () => {
  it("Should respond in the correct format", () => {
    const timeConverter = new TimeConverter(0, "UTC");
    const { time, timeZone } = timeConverter.run("15:30:00", -4);
    expect(time).toMatch(/\d\d:\d\d:\d\d/);
    expect(timeZone).toBe("UTC");
  });

  it("Should convert time to UTC", () => {
    const timeConverter = new TimeConverter(0, "UTC");
    expect(timeConverter.run("15:30:00", -4).time).toBe("19:30:00");
    expect(timeConverter.run("20:51:30", -4.5).time).toBe("01:21:30");
    expect(timeConverter.run("01:22:10", 7).time).toBe("18:22:10");
    expect(timeConverter.run("12:00:00", 12.5).time).toBe("23:30:00");
  });

  it("Should convert time to Caracas -4", () => {
    const timeConverter = new TimeConverter(-4, "Caracas");
    expect(timeConverter.run("19:30:00", 0).time).toBe("15:30:00");
    expect(timeConverter.run("20:00:00", 5.5).time).toBe("10:30:00");
    expect(timeConverter.run("10:00:00", -6).time).toBe("12:00:00");
  });
});

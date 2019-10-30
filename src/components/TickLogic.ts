// TickLogic.ts

class TickLogic {
  private _periods: [Date, Date, number, number][];

  constructor() {
    this._periods = [
      [new Date(2019, 9, 1), new Date(2020, 0, 1), 2360000, 2341388],
      [new Date(2020, 0, 1), new Date(2020, 3, 1), 2341388, 2313295],
      [new Date(2020, 3, 1), new Date(2020, 6, 1), 2313295, 2285202],
      [new Date(2020, 6, 1), new Date(2020, 9, 1), 2285202, 2257109],
      [new Date(2020, 9, 1), new Date(2021, 0, 1), 2257109, 2229016],
      [new Date(2021, 0, 1), new Date(2021, 3, 1), 2229016, 2200923],
      [new Date(2021, 3, 1), new Date(2021, 6, 1), 2200923, 2172830],
      [new Date(2021, 6, 1), new Date(2021, 9, 1), 2172830, 2144737],

      [new Date(2021, 9, 1), new Date(2022, 0, 1), 2200923, 2172830],
      [new Date(2022, 0, 1), new Date(2022, 3, 1), 2172830, 2144737],
      [new Date(2022, 3, 1), new Date(2022, 6, 1), 2144737, 2116644],
      [new Date(2022, 6, 1), new Date(2022, 9, 1), 2116644, 2088551],
      [new Date(2022, 9, 1), new Date(2023, 0, 1), 2088551, 2060457],
      [new Date(2023, 0, 1), new Date(2023, 3, 1), 2060457, 2032364],
      [new Date(2023, 3, 1), new Date(2023, 6, 1), 2032364, 2004271],
      [new Date(2023, 6, 1), new Date(2023, 9, 1), 2004271, 1976178],
      [new Date(2023, 9, 1), new Date(2024, 0, 1), 2257109, 2229016],
      [new Date(2024, 0, 1), new Date(2024, 3, 1), 2341388, 2313295],
      [new Date(2024, 3, 1), new Date(2024, 6, 1), 2313295, 2285202],
      [new Date(2024, 6, 1), new Date(2024, 9, 1), 2285202, 2257109],
      [new Date(2024, 9, 1), new Date(2025, 0, 1), 2257109, 2229016],
      [new Date(2025, 0, 1), new Date(2025, 3, 1), 2341388, 2313295],
      [new Date(2025, 3, 1), new Date(2025, 6, 1), 2313295, 2285202],
      [new Date(2025, 6, 1), new Date(2025, 9, 1), 2285202, 2257109],
      [new Date(2025, 9, 1), new Date(2026, 0, 1), 2257109, 2229016],
      [new Date(2026, 0, 1), new Date(2026, 3, 1), 2341388, 2313295],
      [new Date(2026, 3, 1), new Date(2026, 6, 1), 2313295, 2285202],
      [new Date(2026, 6, 1), new Date(2026, 9, 1), 2285202, 2257109],
      [new Date(2026, 9, 1), new Date(2027, 0, 1), 2257109, 2229016],
      [new Date(2027, 0, 1), new Date(2027, 3, 1), 2341388, 2313295],
      [new Date(2027, 3, 1), new Date(2027, 6, 1), 2313295, 2285202],
      [new Date(2027, 6, 1), new Date(2027, 9, 1), 2285202, 2257109],
      [new Date(2027, 9, 1), new Date(2028, 0, 1), 2257109, 2229016],
      [new Date(2028, 0, 1), new Date(2028, 3, 1), 2341388, 2313295],
      [new Date(2028, 3, 1), new Date(2028, 6, 1), 2313295, 2285202],
      [new Date(2028, 6, 1), new Date(2028, 9, 1), 2285202, 2257109],
      [new Date(2028, 9, 1), new Date(2029, 0, 1), 2257109, 2229016],
      [new Date(2029, 0, 1), new Date(2029, 3, 1), 2341388, 2313295],
      [new Date(2029, 3, 1), new Date(2029, 6, 1), 2313295, 2285202],
      [new Date(2029, 6, 1), new Date(2029, 9, 1), 2285202, 2257109],
      [new Date(2029, 9, 1), new Date(2030, 0, 1), 2257109, 2229016]
    ];
  }

  GetMyHousePercentage(d: Date) {
    let period = this._periods.find(x => x[0] < d && x[1] > d);
    if (period) {
      let g = this.GetInterpolation(period[0], period[1], period[2], period[3]);
      let paidThisPeriod = g(d);
      let toGo = period[2] - paidThisPeriod;
      let housepct = (1 - toGo / 2360000) * 100;
      return [housepct, toGo];
    } else {
      return [0, 0];
    }
  }

  private GetInterpolation(
    start: Date,
    end: Date,
    prevAmount: number,
    nextAmount: number
  ) {
    let diff = prevAmount - nextAmount;
    let timespan = Math.abs(end.getTime() - start.getTime());
    let interpolator = (d: Date) => {
      let fromStart = Math.abs(d.getTime() - start.getTime());
      let percentage = fromStart / timespan;
      let amount = diff * percentage;
      return amount;
    };
    return interpolator;
  }
}

export default TickLogic;

import Period, { JSONPeriod } from "./Period";
import jsonPeriods from "../data/periods.json";

class TickLogic {
  private _principalAmount: number = 2360000;

  ParseJson(periods: JSONPeriod[]): Period[] {
    let mappedPeriods: Period[] = periods.map(x => {
      return {
        Start: new Date(Date.parse(x.Start)),
        End: new Date(Date.parse(x.End)),
        StartAmount: x.StartAmount,
        EndAmount: x.EndAmount
      };
    });
    return mappedPeriods;
  }

  GetMyHousePercentage(d: Date) {
    let data = this.ParseJson(jsonPeriods);
    let period = data.find(x => x.Start < d && x.End > d);
    if (period) {
      let g = this.GetInterpolation(
        period.Start,
        period.End,
        period.StartAmount,
        period.EndAmount
      );
      let toGo = period.StartAmount - g(d);
      let fractionPaid = toGo / this._principalAmount;
      let fractionDone = 1 - fractionPaid;
      let housepct = fractionDone * 100;
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

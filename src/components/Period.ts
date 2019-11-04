type Period = {
  Start: Date;
  End: Date;
  StartAmount: number;
  EndAmount: number;
};

export type JSONPeriod = {
  Start: string;
  End: string;
  StartAmount: number;
  EndAmount: number;
};

export default Period;

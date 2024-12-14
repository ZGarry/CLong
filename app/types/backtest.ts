export interface BacktestSettings {
  holdingPeriod: number;
  holdingQuantity: number;
  startDate: Date | undefined;
  endDate: Date | undefined;
  tradingTime: 'open' | 'close';
  benchmark: string;
}

export interface Factor {
  id: string;
  name: string;
  expression: string;
  type: 'filter' | 'score';
}

export interface FactorSettings {
  excludeMode: 'all' | 'any';
  excludeNewBonds: number;
  excludeMarket: string[];
  customFactors: Factor[];
}

export interface Trade {
  date: string;
  code: string;
  name: string;
  action: 'buy' | 'sell';
  price: number;
  profit?: number;
}

export interface BacktestResult {
  annualReturn: number;
  maxDrawdown: number;
  sharpeRatio: number;
  winRate: number;
  trades: Trade[];
}
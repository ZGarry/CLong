export interface BacktestSettings {
  holdingPeriod: number;
  holdingQuantity: number;
  startDate?: Date;
  endDate?: Date;
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
  excludeNewDays: number;
  excludeMarket: 'sh' | 'sz' | null;
  customFactors: string[];
}

export interface Trade {
  date: string;
  symbol: string;
  type: 'buy' | 'sell';
  price: number;
  quantity: number;
  profit?: number;
}

export interface BacktestResult {
  annualReturn: number;
  maxDrawdown: number;
  sharpeRatio: number;
  winRate: number;
  trades: Trade[];
}
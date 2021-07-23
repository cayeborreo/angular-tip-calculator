export interface CalculatorInput {
  bill?: number | null;
  numberOfPeople?: number | null;
  tipPercent?: number | null;
  customTipPercent?: number | null;
}

export interface BaseCalculatorReady {
  bill: number;
  numberOfPeople: number;
}

export interface TipReady extends BaseCalculatorReady {
  tipPercent: number;
  customTipPercent: null;
}

export interface CustomTipReady extends BaseCalculatorReady {
  customTipPercent: number;
  tipPercent: null;
}

export type CalculatorReady = TipReady | CustomTipReady;

export const initialInputValues = {
  bill: null,
  tipPercent: null,
  customTipPercent: null,
  numberOfPeople: null,
};

export interface CalculatorOutput {
  tipTotal: number;
  amountPerPerson: number;
}

export const initialOutputValues = {
  tipTotal: 0.0,
  amountPerPerson: 0.0,
};

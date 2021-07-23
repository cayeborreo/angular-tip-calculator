export type UpdateValues = Partial<List>;

type List = {
  bill?: number;
  tipPercent?: number | null;
  customTipPercent?: number | null;
  numberOfPeople?: number;
};

export type HandleInputValues = {
  name: string;
};

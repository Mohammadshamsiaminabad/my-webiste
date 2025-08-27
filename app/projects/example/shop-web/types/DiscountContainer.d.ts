export interface DiscountBoxType {
  label: string;
  img: string;
  view: number;
  price: number;
  score: number;
};

export interface DiscountContainerType {
  precent: number;
  components: DiscountBoxType[];
};
export type AreaStamp = {
  area: string;
  areaId: string;
  required: number;
  shop: ShopData[];
};

export type ShopData = {
  id: string;
  name: string;
  classname: string;
  category: string;
  imagepath: string;
};

export type StampCountType = {
  max: number;
  count: number;
  required: number;
};

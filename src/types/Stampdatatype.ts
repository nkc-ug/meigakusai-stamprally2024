export type LocationStamp = {
  location: string;
  locationId: string;
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

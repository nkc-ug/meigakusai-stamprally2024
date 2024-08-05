export type LocationStamp = {
  location: string;
  shop: ShopData[];
};

export type ShopData = {
  id: number;
  name: string;
  classname: string;
  category: string;
  imagepath: string;
};

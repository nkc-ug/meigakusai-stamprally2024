export type LocationStamp = {
  location: string;
  shop: ShopData[];
};

export type ShopData = {
  id: string;
  name: string;
  classname: string;
  category: string;
  imagepath: string;
};

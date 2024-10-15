import { ShopData, StampCountType } from "../types/Stampdatatype";
import json from "../assets/json/stamplist.json";
import { GetStampData } from "./StampData";

/*
  スタンプ獲得数取得用の関数 / StampCount.ts
  引数：string（取得したい号館番号）
  戻り値：StampCount
          {
            max:number,（そのエリアのスタンプ数）
            count:number,（そのエリアの獲得スタンプ数）
            required:number,（そのエリアの獲得目標数）
          }
  備考：チャレンジングロット・メモリアルコートは０番
*/
export const StampCount = (text: string) => {
  const getMax = () => {
    switch (text) {
      case "0":
        return json[3].shop.length;
      case "1":
        return json[0].shop.length;
      case "3":
        return json[1].shop.length;
      case "10":
        return json[2].shop.length;
      default:
        return 0;
    }
  };
  const getCount = () => {
    const isGet = (value: ShopData) => GetStampData(value.id);
    const getLocationJson = () => {
      switch (text) {
        case "0":
          return json[3].shop;
        case "1":
          return json[0].shop;
        case "3":
          return json[1].shop;
        case "10":
          return json[2].shop;
        default:
          return json[0].shop;
      }
    };
    return getLocationJson().filter(isGet).length;
  };

  const stampcount: StampCountType = {
    max: getMax(),
    count: getCount(),
    required: 2,
  };

  return stampcount;
};

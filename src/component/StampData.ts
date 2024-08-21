import Cookies from "js-cookie";

export const SetStampData = (id: string, isGet: boolean = true) => {
  const tmpjson = JSON.parse(document.cookie);
  const json = tmpjson.map((stamp: StampData) =>
    stamp.id === id ? { ...stamp, isGet: isGet } : stamp
  );
  const data = JSON.stringify(json, null, 2);
  Cookies.set("Meigakusai-Stamprally2024", data);
};
type StampData = {
  id: string;
  isGet: boolean;
};
export const GetStampData = (id: string) => {
  const cookieData = Cookies.get("Meigakusai-Stamprally2024");
  const json = cookieData
    ? JSON.parse(cookieData)
    : JSON.parse(DefaultStampData());
  const element = json.stampdata.find(
    (element: StampData) => element.id === id
  );
  return element ? element.isGet : false;
};
export const DefaultStampData = () => {
  const defaultJson = JSON.stringify(
    {
      stampdata: [
        { id: "152", isGet: false },
        { id: "162", isGet: false },
        { id: "334", isGet: false },
        { id: "352", isGet: false },
        { id: "618", isGet: false },
        { id: "1032", isGet: false },
        { id: "1042", isGet: false },
        { id: "01", isGet: false },
        { id: "02", isGet: false },
      ],
    },
    null,
    2
  );
  const options = { expires: 7 };
  Cookies.set("Meigakusai-Stamprally2024", defaultJson, options);

  return defaultJson;
};

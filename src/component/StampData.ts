export const SetStampData = (id: string, isGet: boolean) => {
  const tmpjson = [
    { id: "152", isGet: false },
    { id: "162", isGet: false },
    { id: "334", isGet: false },
    { id: "352", isGet: false },
    { id: "618", isGet: false },
    { id: "1032", isGet: false },
    { id: "1042", isGet: false },
    { id: "01", isGet: false },
    { id: "02", isGet: false },
  ];
  const json = tmpjson.map((stamp) =>
    stamp.id === id ? { ...stamp, isGet: isGet } : stamp
  );
  const data = JSON.stringify(json, null, 2);
  localStorage.setItem("Meigakusai-Stamprally2024", data);
};
type StampData = {
  id: string;
  isGet: boolean;
};
export const GetStampData = (id: string) => {
  const json = JSON.parse(
    String(localStorage.getItem("Meigakusai-Stamprally2024"))
  );
  const element = json.find((element: StampData) => element.id === id);
  return element.isGet ?? false;
};

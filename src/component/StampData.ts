import Cookies from "js-cookie";
import { HashingSha1 } from "./HashingSha1";

const COOKIE_KEY = "Meigakusai-Stamprally2024";
const OPTIONS = { expires: 7 };

export const SetStampData = (id: string) => {
  /*
    idを格納する際、urlのid(ハッシュ化済み)の場合はハッシュ化する必要はないがjsonのidを使って格納する場合はハッシュ化する必要がある。
    現段階ではurlのidを使用しているのでハッシュ化は入れていないがjsonのidを使用する際はハッシュ化が必要
  */
  const stampdata = (Cookies.get(COOKIE_KEY) ?? id).split(",");
  if (!stampdata.includes(id)) {
    stampdata.push(id);
  }

  Cookies.set(COOKIE_KEY, stampdata.join(","), OPTIONS);
};

export const GetStampData = (id: string) => {
  const stampdata = (Cookies.get(COOKIE_KEY) ?? "").split(",");
  const searchId = HashingSha1(id);

  return stampdata ? stampdata.includes(searchId) : false;
};

export const ShuffleStampData = () => {
  const stampdata = (Cookies.get(COOKIE_KEY) ?? "").split(",");

  const result = stampdata.sort(() => 0.5 - Math.random());

  Cookies.set(COOKIE_KEY, result.join(","), OPTIONS);
};

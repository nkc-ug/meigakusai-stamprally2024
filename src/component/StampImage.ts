import sample from "/src/assets/images/stamp/nkc-ug.jpg";
import stamp01 from "/src/assets/images/stamp/01.jpg";
import stamp02 from "/src/assets/images/stamp/02.jpg";
import stamp03 from "/src/assets/images/stamp/03.jpg";
import stamp04 from "/src/assets/images/stamp/04.jpg";
import stamp05 from "/src/assets/images/stamp/05.jpg";
import stamp06 from "/src/assets/images/stamp/06.jpg";
import stamp07 from "/src/assets/images/stamp/07.jpg";
import stamp08 from "/src/assets/images/stamp/08.jpg";
import stamp09 from "/src/assets/images/stamp/09.jpg";
import stamp10 from "/src/assets/images/stamp/10.jpg";
import stamp11 from "/src/assets/images/stamp/11.jpg";
import stamp12 from "/src/assets/images/stamp/12.jpg";
import stamp13 from "/src/assets/images/stamp/13.jpg";
import stamp14 from "/src/assets/images/stamp/14.jpg";
import stamp15 from "/src/assets/images/stamp/15.jpg";
import stamp16 from "/src/assets/images/stamp/16.jpg";
import stamp17 from "/src/assets/images/stamp/17.jpg";
import stamp18 from "/src/assets/images/stamp/18.jpg";
import stamp19 from "/src/assets/images/stamp/19.jpg";
import stamp20 from "/src/assets/images/stamp/20.jpg";
import stamp21 from "/src/assets/images/stamp/21.jpg";
import stamp22 from "/src/assets/images/stamp/22.jpg";
import stamp23 from "/src/assets/images/stamp/23.jpg";
import stamp24 from "/src/assets/images/stamp/24.jpg";
import stamp25 from "/src/assets/images/stamp/25.jpg";
import stamp26 from "/src/assets/images/stamp/26.jpg";
import stamp27 from "/src/assets/images/stamp/27.jpg";

export const StampImage = (stamp: string) => {
  const STAMPIMAGE_LIST: { [key: string]: string } = {
    sample: sample,
    "01": stamp01,
    "02": stamp02,
    "03": stamp03,
    "04": stamp04,
    "05": stamp05,
    "06": stamp06,
    "07": stamp07,
    "08": stamp08,
    "09": stamp09,
    "10": stamp10,
    "11": stamp11,
    "12": stamp12,
    "13": stamp13,
    "14": stamp14,
    "15": stamp15,
    "16": stamp16,
    "17": stamp17,
    "18": stamp18,
    "19": stamp19,
    "20": stamp20,
    "21": stamp21,
    "22": stamp22,
    "23": stamp23,
    "24": stamp24,
    "25": stamp25,
    "26": stamp26,
    "27": stamp27,
  };

  return STAMPIMAGE_LIST[stamp] ?? sample;
};

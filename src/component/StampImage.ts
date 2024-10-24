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
import stamp120 from "/src/assets/images/stamp/120.jpg";
import stamp135 from "/src/assets/images/stamp/135.jpg";
import stamp144 from "/src/assets/images/stamp/144.jpg";
import stamp145 from "/src/assets/images/stamp/145.jpg";
import stamp155 from "/src/assets/images/stamp/155.jpg";
import stamp163 from "/src/assets/images/stamp/163.jpg";
import stamp165 from "/src/assets/images/stamp/165.jpg";
import stamp174 from "/src/assets/images/stamp/174.jpg";
import stamp336 from "/src/assets/images/stamp/336.jpg";
import stamp346 from "/src/assets/images/stamp/346.jpg";
import stamp347 from "/src/assets/images/stamp/347.jpg";
import stamp351 from "/src/assets/images/stamp/351.jpg";
import stamp353 from "/src/assets/images/stamp/353.jpg";
import stamp354 from "/src/assets/images/stamp/354.jpg";
import stamp357 from "/src/assets/images/stamp/357.jpg";
import stamp618 from "/src/assets/images/stamp/618.jpg";
import stamp1041 from "/src/assets/images/stamp/1041.jpg";
import stamp1043 from "/src/assets/images/stamp/1043.jpg";
import stamp1046 from "/src/assets/images/stamp/1046.jpg";
import stamp1051 from "/src/assets/images/stamp/1051.jpg";
import stampE01 from "/src/assets/images/stamp/E01.jpg";
import stampE02 from "/src/assets/images/stamp/E02.jpg";
import stampE03 from "/src/assets/images/stamp/E03.jpg";
import stampE04 from "/src/assets/images/stamp/E04.jpg";
import stampE05 from "/src/assets/images/stamp/E05.jpg";
import stampE06 from "/src/assets/images/stamp/E06.jpg";
import stampE07 from "/src/assets/images/stamp/E07.jpg";
import stampE08 from "/src/assets/images/stamp/E08.jpg";
import stampE09 from "/src/assets/images/stamp/E09.jpg";
import stampE10 from "/src/assets/images/stamp/E10.jpg";
import stampE11 from "/src/assets/images/stamp/E11.jpg";
import stampE12 from "/src/assets/images/stamp/E12.jpg";
import stampE13 from "/src/assets/images/stamp/E13.jpg";
import stampE14 from "/src/assets/images/stamp/E14.jpg";

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
    "120": stamp120,
    "135": stamp135,
    "144": stamp144,
    "145": stamp145,
    "155": stamp155,
    "163": stamp163,
    "165": stamp165,
    "174": stamp174,
    "336": stamp336,
    "346": stamp346,
    "347": stamp347,
    "351": stamp351,
    "353": stamp353,
    "354": stamp354,
    "357": stamp357,
    "618": stamp618,
    "1041": stamp1041,
    "1043": stamp1043,
    "1046": stamp1046,
    "1051": stamp1051,
    E01: stampE01,
    E02: stampE02,
    E03: stampE03,
    E04: stampE04,
    E05: stampE05,
    E06: stampE06,
    E07: stampE07,
    E08: stampE08,
    E09: stampE09,
    E10: stampE10,
    E11: stampE11,
    E12: stampE12,
    E13: stampE13,
    E14: stampE14,
  };
  return STAMPIMAGE_LIST[stamp] ?? sample;
};

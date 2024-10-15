import sample from "/src/assets/images/stamp/nkc-ug.jpg";
import stamp01 from "/src/assets/images/stamp/01.jpg";
import stamp02 from "/src/assets/images/stamp/02.jpg";
import stamp03 from "/src/assets/images/stamp/03.jpg";

export const StampImage = (stamp: string) => {
  const STAMPIMAGE_LIST: { [key: string]: string } = {
    sample: sample,
    "01": stamp01,
    "02": stamp02,
    "03": stamp03,
  };

  return STAMPIMAGE_LIST[stamp] ?? sample;
};

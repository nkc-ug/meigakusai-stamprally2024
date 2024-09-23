import sample from "/src/assets/images/stamp/nkc-ug.jpg";

export const StampImage = (stamp: string) => {
  const STAMPIMAGE_LIST: { [key: string]: string } = {
    sample: sample,
  };

  return STAMPIMAGE_LIST[stamp] ?? sample;
};

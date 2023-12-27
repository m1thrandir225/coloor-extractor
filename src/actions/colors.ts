import Vibrant from "node-vibrant";

import type {ColorsArray} from "@/types";

const getColors = async (url: string): Promise<ColorsArray> => {
  "use server";

  const pallete = await Vibrant.from(url).getPalette();

  return Object.entries(pallete).map(([key, value]) => {
    return {name: key, color: value?.hex};
  });
};

export {getColors};

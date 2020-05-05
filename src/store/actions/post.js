import { OUT_APP } from "../types";

export const outer = () => {
  return {
    type: OUT_APP,
    preload: { auth: false },
  };
};

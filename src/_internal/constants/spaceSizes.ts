import { Space } from "../../types/Space";

type SpaceSizes = { [key in Space]: number };

export const spaceSizes: SpaceSizes = {
  "xx-small": 0.25,
  "x-small": 0.5,
  small: 1,
  medium: 1.5,
  large: 2,
  "x-large": 2.5,
  "xx-large": 3,
};

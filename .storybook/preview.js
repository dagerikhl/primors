import { getVersionedTitle } from "./utils/getVersionedTitle";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "light",
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        getVersionedTitle(),
        ["Readme", "Changelog", "*"],
        "Components",
        "Hooks",
        "*",
      ],
    },
  },
};

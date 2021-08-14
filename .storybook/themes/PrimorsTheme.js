import { create } from "@storybook/theming";
import { version } from "../../package.json";
import logo from "../public/logo.png";

const TITLE = `Primors v${version}`;

export default create({
  base: "dark",
  brandTitle: TITLE,
  brandUrl: "https://github.com/dagerikhl/primors",
  brandImage: logo,

  textInverseColor: "black",
  textColor: "rgba(255,255,255,0.9)",
});

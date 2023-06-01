import { SNOW_COUNT } from "./constants/value";
import "./style.css";
import { generateSnowEffect } from "./utils/generateSnowEffect";
import { getDom } from "./utils/getDom";

const app = getDom("#app")!;

const effect = generateSnowEffect(SNOW_COUNT);

effect.forEach((snow) => {
  app.appendChild(snow);
});

import "./style.css";
import { generateSnowEffect } from "./utils/generateSnowEffect";
import { getDom } from "./utils/getDom";

const app = getDom("#app")!;

const effect = generateSnowEffect(30);

effect.forEach((snow) => {
  app.appendChild(snow);
});

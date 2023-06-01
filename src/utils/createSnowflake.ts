import { MIN_DURATION } from "../constants/value.js";
import { createDom } from "./createDom.js";

export const createSnowflake = () => {
  const snow = createDom("div");
  const delay = Math.random() * 10;
  const opacity = Math.random();
  const duration = Math.random() * 20 + MIN_DURATION;

  snow.classList.add("snow");
  snow.style.left = `${Math.random() * window.screen.width}px`;
  snow.style.animationDelay = `${delay}s`;
  snow.style.opacity = String(opacity);
  snow.style.animationDuration = `${duration}s`;
  snow.innerText = "❄";

  return { snow };
};

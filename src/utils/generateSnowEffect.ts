import { createSnowflake } from "./createSnowflake";

export const generateSnowEffect = (count: number) => {
  const snowEffect = [];
  for (let i = 0; i < count; i++) {
    const { snow } = createSnowflake();
    snowEffect.push(snow);
  }
  return snowEffect;
};

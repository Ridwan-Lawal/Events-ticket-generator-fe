import { Noto_Serif_KR } from "next/font/google";
import { Roboto } from "next/font/google";
import { Road_Rage } from "next/font/google";

export const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  display: "swap",
  fallback: ["serif"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  fallback: ["arial"],
});

export const roadRage = Road_Rage({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

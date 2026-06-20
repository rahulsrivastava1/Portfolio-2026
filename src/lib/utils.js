import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/** Returns a usable live demo URL, or null when none is configured. */
export function getLiveDemoUrl(links) {
  const url = links?.live?.trim();
  if (!url || url === "#") return null;
  return url;
}

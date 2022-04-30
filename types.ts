import { sourceToListIdMap } from "./constants/common";

export type Status = "idle" | "loading" | "error";

export type validSources = keyof typeof sourceToListIdMap;

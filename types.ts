import { sourceToListIdMap } from "./constants/common";

export type Status = "idle" | "loading" | "error";

export type validSources = keyof typeof sourceToListIdMap;

export interface NewsItem {
  title: string;
  imageURL: string;
  newsURL: string;
  siteName: string;
}

export interface CommunityStat {
  key: string;
  followerCount: string;
}
export interface Shardian {
  name: string;
  image: any;
  category: string;
  description: string;
}
export interface NotionPagesLinks {
  slug: string;
  notionId: string;
  title: string;
  description: string;
  image: string;
}

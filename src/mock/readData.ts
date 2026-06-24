import { articlesNce2 } from "./nce2";
import { articlesNce3 } from "./nce3";
import { articlesNce4 } from "./nce4";
import { articlesIelts } from "./ielts";
import type { Article } from "./types";

export type { SentenceData, VocabItem, Article } from "./types";

export const articles: Record<string, Article> = {
  ...articlesNce2,
  ...articlesNce3,
  ...articlesNce4,
  ...articlesIelts,
};

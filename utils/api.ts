import Airtable from "airtable";
import { NewsItem } from "../types";

export const fetchNewList = () =>
  fetch("/api/news")
    .then((res) => res.json())
    .then(({ data }) =>
      data.map((item: any) => ({
        title: item.title,
        imageURL: item.image?.[0].thumbnails?.large.url,
        siteName: item.siteName,
        newsURL: item.newsURL,
      }))
    );

export const getSHMNewsArticles = (): Promise<NewsItem[]> => {
  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
  });
  const data: any[] = [];
  const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID as string);
  return new Promise((resolve, reject) => {
    base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_NAME as string)
      .select({
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            const title = record.get("Title");
            const SiteName = record.get("Site Name & Date");
            const image: any = record.get("Image");
            const newsURL = record.get("News URL");
            data.push({
              title,
              siteName: SiteName,
              imageURL: image?.[0]?.thumbnails?.large?.url,
              newsURL,
            });
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            reject(err);
            return;
          }
          resolve(data);
        }
      );
  });
};

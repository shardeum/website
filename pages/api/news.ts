import { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

const getSHMNewsArticles = () => {
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
            const image = record.get("Image");
            const newsURL = record.get("News URL");
            data.push({ title, siteName: SiteName, image, newsURL });
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Todo: add caching here
  const data = await getSHMNewsArticles();
  return res.status(201).json({ data });
}

import { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

const configureAirtable = () => {
  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
  });
};

const getSHMNewsArticles = () => {
  configureAirtable();
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

export function getSuperShardians() {
  configureAirtable();
  const data: any[] = [];
  const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID as string);
  return new Promise((resolve, reject) => {
    base(process.env.NEXT_PUBLIC_AIRTABLE_SUPERSHARDEUM as string)
      .select({
        view: "Grid view",
      })
      .firstPage()
      .then((records) => {
        records.forEach(function (record) {
          const name = record.get("Name");
          const description = record.get("Description");
          const createdDate = record.get("CreatedDate");
          const category = record.get("Category");
          const image = record.get("Image");
          data.push({ name, description, category, image });
        });
        resolve(data);
      });
  });
}

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Todo: add caching here
  const data = await getSHMNewsArticles();
  return res.status(201).json({ data });
}

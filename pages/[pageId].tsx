import type { NextPage } from "next";
import { NotionAPI } from "notion-client";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

const Page = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  return (
    <>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage("b47d0cc33f5d4100a73ef91a8dfe5a07");

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default Page;

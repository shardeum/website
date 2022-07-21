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

  const recordMap = await notion.getPage("a4570667a6af4778a0d5228710601d5e");

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

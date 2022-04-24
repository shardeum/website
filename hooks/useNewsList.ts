import { useEffect, useState } from "react";
import { Status } from "../types";
interface DataProps {
  title: string;
  imageURL: string;
  newsURL: string;
  siteName: string;
}

interface NewsStateProps {
  data: DataProps[];
  status: Status;
}

function useNewsList() {
  const [state, setState] = useState<NewsStateProps>({ data: [], status: "idle" });

  const fetchNewList = () => {
    fetch("/api/news")
      .then((res) => res.json())
      .then(
        ({ data }) => {
          setState(() => ({
            status: "idle",
            data: data.map((item: any) => ({
              title: item.title,
              imageURL: item.image?.[0].thumbnails?.large.url,
              siteName: item.siteName,
              newsURL: item.newsURL,
            })),
          }));
        },
        () => {
          setState((prev) => ({
            ...prev,
            status: "error",
          }));
        }
      );
  };

  useEffect(() => {
    setState((prev) => ({ ...prev, status: "loading" }));
    fetchNewList();
  }, []);

  return { data: state.data, status: state.status };
}

export default useNewsList;

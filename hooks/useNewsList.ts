import { useEffect, useState } from "react";
import { Status, NewsItem } from "../types";
import { fetchNewList } from "../utils/api";

interface NewsStateProps {
  data: NewsItem[];
  status: Status;
}

function useNewsList() {
  const [state, setState] = useState<NewsStateProps>({ data: [], status: "idle" });

  useEffect(() => {
    setState((prev) => ({ ...prev, status: "loading" }));
    fetchNewList();
  }, []);

  return { data: state.data, status: state.status };
}

export default useNewsList;

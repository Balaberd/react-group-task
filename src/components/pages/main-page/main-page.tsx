import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { articleDataInterface } from "../../../lib/types/articlesData";

import { fetchDataByURL } from "../../../lib/api";
import { useDebounce } from "../../../lib/hooks/debounce";
import { basicURL, itemsLimitSize } from "../../../lib/const";

import AddMoreButton from "../../blocks/add-more-button/add-more-button";
import Panel from "../../blocks/panel/panel";
import ItemsList from "../../blocks/items-list/items-list";
import Item from "../../blocks/item/item";

import styles from "./style.module.css";

import { articlesTestData } from "../../../lib/testArticles";

export default function MainPage() {
  const navigate = useNavigate();

  const [queryValue, setQueryValue] = useState<string>("");
  const [prevQueryValue, setPrevQueryValue] = useState<string>("");
  const [results, setResults] = useState<React.ReactElement[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nextArticlesURL, setNextArticlesURL] = useState<string>("");

  const debouncedSearchTerm = useDebounce(queryValue, 1000);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQueryValue(event.target.value);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const finalURL: string = getFinalURL()
    getArticles(finalURL);
  };

  function handleAddMore(event: React.MouseEvent<HTMLButtonElement>) {
    getMoreArticles();
  };

  function getFinalURL(): string {
    return basicURL + `?search=${queryValue}&limit=${itemsLimitSize}`;
  }

  // count of item defined by "itemsLimitSize" in src/lib/const.ts,  
  // default itemsLimitSize === 1 for develop

  function installArticles(URL: string, isAddItems: boolean = false) {
    fetchDataByURL(URL)
      .then(res => {
        const { next, results: articles } = res
        const newItems: React.ReactElement[] = articles
          .map((data: articleDataInterface) => { return Item(data, navigate) })

        setNextArticlesURL(next)

        !isAddItems ? setResults(newItems) : setResults([...results, ...newItems])
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        setIsLoading(false)
      })
  }

  function getArticles(finalURL: string) {
    // console.log("get", queryValue);

    setNextArticlesURL("");
    setResults([]);
    setIsLoading(true);
    setPrevQueryValue(queryValue);

    installArticles(finalURL, false)
  }

  function getMoreArticles() {
    // console.log("get more");

    setIsLoading(true);

    installArticles(nextArticlesURL, true)
  };

  useEffect(
    () => {
      // console.log("useEff check");
      if (debouncedSearchTerm !== prevQueryValue) {
        // console.log("useEff true");
        const finalURL: string = getFinalURL()
        getArticles(finalURL);
      }
    }, [debouncedSearchTerm]
  );

  useEffect(
    () => {
      // init data

      getArticles(`https://api.spaceflightnewsapi.net/v4/articles/?limit=${itemsLimitSize}`);

      // // OR you can use result of the test query == basicURL + `?search=bin&limit=12`
      // setNextArticlesURL(articlesTestData.next);
      // setResults(
      //   articlesTestData.results.map((data: articleDataInterface) => Item(data, navigate))
      // )  
    }, []
  );

  return (
    <section className={styles.section}>
      <Panel
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        queryValue={queryValue}
        results={results}
        isLoading={isLoading}
      />
      <ItemsList
        results={results}
        isLoading={isLoading}
      />
      <AddMoreButton
        handleAddMore={handleAddMore}
        nextArticlesURL={nextArticlesURL}
        isLoading={isLoading}
      />
    </section>
  );
}
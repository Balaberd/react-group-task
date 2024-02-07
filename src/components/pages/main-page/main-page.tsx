import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { articleDataInterface } from "../../../lib/types/articlesData";

import { fetchDataByURL } from "../../../lib/api";
import { useDebounce } from "../../../lib/hooks/debounce";
import { basicURL, itemsLimitSize } from "../../../lib/const";

import AddMoreButton from "../../blocks/AddMoreButton/AddMoreButton";
import Panel from "../../blocks/Panel/Panel";
import ItemsList from "../../blocks/ItemsList/ItemsList";
import Item from "../../blocks/Item/Item";

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

      // // OR the result of test query { basicURL + `?search=bin&limit=12` }
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
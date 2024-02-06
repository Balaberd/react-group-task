import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { articleDataInterface } from "../dataInterface";

import styles from "./style.module.css";

import { fetchSomeArticlesByURL } from "../api";
import { useDebounce } from "./debounce";

import AddMoreButton from "../../blocks/AddMoreButton/AddMoreButton";
import Panel from "../../blocks/Panel/Panel";
import ItemsList from "../../blocks/ItemsList/ItemsList";
import Item from "../../blocks/Item/Item";

import { articlesTestData } from "../testArticles";

const basicURL: string = "https://api.spaceflightnewsapi.net/v4/articles/";
const itemsPullSize: number = 1;

export default function MainPage() {
  const navigate = useNavigate();

  const [queryValue, setQueryValue] = useState<string>("");
  const [prevQueryValue, setPrevQueryValue] = useState<string>("");
  const [results, setResults] = useState<React.ReactElement[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nextArticlesURL, setNextArticlesURL] = useState<string>("");

  const debouncedSearchTerm = useDebounce(queryValue, 1000);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const finalURL: string = basicURL + `?search=${queryValue}&limit=${itemsPullSize}`
    getArticles(finalURL);
  };

  const handleAddMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    getMoreArticles();
  };

  function getArticles(finalURL: string) {
    // console.log("get", queryValue);

    setNextArticlesURL("");
    setResults([]);
    setIsLoading(true);
    setPrevQueryValue(queryValue);

    fetchSomeArticlesByURL(finalURL)
      .then(res => {
        const [next, articles] = res
        const newItems: React.ReactElement[] = articles
          .map((data: articleDataInterface) => { return Item(data, navigate) })

        setNextArticlesURL(next)
        setResults(newItems)
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        setIsLoading(false)
      })
  }

  function getMoreArticles() {
    // console.log("get more");

    setIsLoading(true);

    fetchSomeArticlesByURL(nextArticlesURL).then(res => {
      const [next, articles] = res
      const newItems: React.ReactElement[] = articles
        .map((data: articleDataInterface) => { return Item(data, navigate) })

      setNextArticlesURL(next)
      setResults([...results, ...newItems])
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setIsLoading(false)
    })
  }

  useEffect(
    () => {
      // console.log("useEff check");
      if ((debouncedSearchTerm === queryValue) && (debouncedSearchTerm !== prevQueryValue)) {
        // console.log("useEff true");
        const finalURL: string = basicURL + `?search=${queryValue}&limit=${itemsPullSize}`
        getArticles(finalURL)
      }
    }, [debouncedSearchTerm]
  );

  useEffect(
    () => {
      // the test query was "bin"
      setNextArticlesURL(articlesTestData.next);
      setResults(
        articlesTestData.results.map((data: articleDataInterface) => Item(data, navigate))
      )

      // getArticles(`https://api.spaceflightnewsapi.net/v4/articles/?limit=${itemsPullSize}`)
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
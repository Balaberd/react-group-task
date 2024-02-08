import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { articleDataInterface } from "../../../lib/types/articlesData";

import { fetchDataByURL } from "../../../lib/api";
import { useDebounce } from "../../../lib/hooks/debounce";
import { basicURL, itemsLimitSize } from "../../../lib/const";

import AddMoreButton from "../../blocks/add-more-button/add-more-button";
import Panel from "../../blocks/panel/panel";
import ItemsList from "../../blocks/items-list/items-list";
import Item from "../../blocks/item/item";

import styles from "./style.module.css";

export default function MainPage() {
  // логику запросов надо выкинуть в компонент <Panel /> так, 
  // чтобы он возвращал только массив данных для будущих карточек

  // а создание карточек в <ItemsList />

  const [searchParamsHooks] = useSearchParams();

  const navigate = useNavigate();

  const searchParams = new URLSearchParams(document.location.search);
  const searchQuery: string = String(searchParams.get("search"));

  const [querySearch, setQuerySearch] = useState<string>(searchQuery !== "null" ? searchQuery : "");
  const [prevQueryValue, setPrevQueryValue] = useState<string>(querySearch);
  const [results, setResults] = useState<React.ReactElement[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nextArticlesURL, setNextArticlesURL] = useState<string>("");

  const debouncedSearchTerm = useDebounce(querySearch, 1000);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuerySearch(event.target.value);
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
    return basicURL + `?search=${querySearch}&limit=${itemsLimitSize}`;
  }

  function installArticles(finalURL: string, isAddItems: boolean = false) {
    // console.log("get articles");

    const url = new URL(finalURL)

    // {url.search} не безопасно, надо изменить
    navigate(`/search${url.search}`, { replace: true });

    fetchDataByURL(finalURL)
      .then(res => {
        const { next: nextURL, results: articles } = res
        const newItems: React.ReactElement[] = articles
          .map((data: articleDataInterface) => { return Item(data, navigate) })

        setNextArticlesURL(nextURL)

        !isAddItems ? setResults(newItems) : setResults([...results, ...newItems])
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        setIsLoading(false)
      })
  }

  function getArticles(finalURL: string) {
    // console.log("get", querySearch);

    setNextArticlesURL("");
    setResults([]);
    setIsLoading(true);
    setPrevQueryValue(querySearch);

    installArticles(finalURL, false)
  }

  function getMoreArticles() {
    // console.log("get more");

    setIsLoading(true);

    installArticles(nextArticlesURL, true)
  };

  useEffect(() => {
    // console.log("useEff check");

    if (debouncedSearchTerm !== prevQueryValue && prevQueryValue !== querySearch) {
      // console.log("useEff true");

      const finalURL: string = getFinalURL()
      getArticles(finalURL);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    // реализовать, используя searchParamsHooks
    if (window.location.pathname === "/") {
      setNextArticlesURL("");
      setResults([]);

      setQuerySearch("");
      setPrevQueryValue("");
    }
  }, [searchParamsHooks])

  useEffect(() => {
    if (searchParams.toString()) {
      // если в URL есть параметры делаем запрос и получает limit + offset страниц
      const limit = Number(searchParams.get("limit")); // количество полученных итемов в последнем запросе
      const offset = Number(searchParams.get("offset")); // количество уже полученных итемов в прошлых запросах

      getArticles(basicURL + `?search=${querySearch}&limit=${offset + limit}`); // плюсуем их чтобы получить бывшее количество итемов

      // если у нас в ответе сервера получена ссылка на следующую страницу
      // т.е. есть еще данные
      // то приводим URL последующего запроса в порядок
      if (nextArticlesURL) {
        setNextArticlesURL(basicURL + `?search=${querySearch}&limit=${limit}&offset=${offset}`)
      }
    } else if (window.location.pathname !== "/") {
      // если параметров нет то берем первые itemsLimitSize статей
      getArticles(`https://api.spaceflightnewsapi.net/v4/articles/?limit=${itemsLimitSize}`);
    }
  }, []);

  return (
    <section className={styles.section}>
      <Panel
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        querySearch={querySearch}
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
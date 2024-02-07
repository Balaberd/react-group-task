import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { articleDataInterface } from "../../../lib/types/articlesData"
import styles from "./style.module.css"

import { fetchDataByURL } from "../../../lib/api"

import { articlesTestData } from "../../../lib/testArticles"

export default function ReportPage() {
  const { articleID } = useParams<string>();
  const [error, setError] = useState<any[] | null>(null);
  const [data, setData] = useState<articleDataInterface | null>(null);

  const getData = (fetchURL: string) => {
    fetchDataByURL(fetchURL).then(res => {
      if (res.detail || res.error) {
        setError(res.detail || res.error)
      } else {
        setData(res)
      }
    })
  }

  useEffect(() => {
    if (articleID === "22461") {
      console.log('test article#22461');
      setData(articlesTestData.results[0]);
    }
    else {
      getData(`https://api.spaceflightnewsapi.net/v4/articles/${articleID}`)
    }
  }, [])

  return (
    <section>
      {error && <h2>{error}</h2>}
      {data &&
        <div className={styles.articleContent}>
          <h2>{data.title}</h2>
          <img
            src={data.image_url}
            alt={data.title}
            className={styles.articleContentImg}
          />
          <p>{data.summary}</p>
        </div>
      }
    </section>
  );
};
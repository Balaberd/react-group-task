import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { articleDataInterface } from "../../../lib/types/articlesData"
import styles from "./style.module.css"

import { fetchDataByURL } from "../../../lib/api"

import { articlesTestData } from "../../../lib/testArticles"

const ReportPage = () => {
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
      // For develop
      console.log('test article#22461');
      setData(articlesTestData.results[0]);
    } else {
      // In the end there will be only this
      getData(`https://api.spaceflightnewsapi.net/v4/articles/${articleID}`)

    }
  }, [])

  return (
    <section>
      <div className={styles.mainContent}>
        {error ? <h1>{error}</h1> :
          data ? <>
            <h1>{data.title}</h1>
            <img
              src={data.image_url}
              alt={data.title}
              className={styles.mainContentImg}
            />
            <p>{data.summary}</p>
          </> : null
        }
      </div >
    </section >
  );
};

export default ReportPage;
export function fetchSomeArticlesByURL(searchUrl: string) {

  return fetch(searchUrl, { method: 'GET' })
    .then(res => res.json())
    .then(res => {
      // console.log(res);
      return [res.next, res.results]
    })
    .catch(error => {
      console.log("query error:", error);
      return [];
    })
}

export function fetchOneArticleByURL(searchUrl: string) {

  return fetch(searchUrl, { method: 'GET' })
    .then(res => res.json())
    .then(res => {
      // console.log(res);
      return res
    })
    .catch(error => {
      console.log("query error:", error);
      return { error: error.name };
    })
}
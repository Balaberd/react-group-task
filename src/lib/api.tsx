export function fetchDataByURL(fetchURL: string) {
  // console.log("query:", fetchURL);
  return fetch(fetchURL, { method: 'GET' })
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
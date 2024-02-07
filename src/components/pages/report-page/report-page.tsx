const ReportPage = () => {
  const url = "https://api.spaceflightnewsapi.net/v4/reports/?limit=50";
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
  return <section>REPORT PAGE</section>;
}

export default ReportPage;
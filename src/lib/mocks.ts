type TResponse = {
  count: number;
  next: string;
  previous: string;
  result: TMockItem[];
};

export type TMockItem = {
  id: number;
  image_url: string;
  news_site: string;
  published_at: string;
  summary: string;
  title: string;
  updated_at: string;
  url: string;
};

export const MOCK_ITEM: TMockItem = {
  id: 1517,
  image_url:
    "https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg",
  news_site: "NASA",
  published_at: "2024-01-30T17:16:00Z",
  summary:
    "Cygnus NG-20 Launch: The Cygnus NG-20 cargo vehicle launched today, January 30th, at 11:07 AM CST, and is planned to be captured and berthed to the ISS on Thursday, February 1st, at 3:20 AM CT and 7:40 AM CT respectively. Cygnus will be berthed to the Node 1 Nadir port and will deliver more than …",
  title: "ISS Daily Summary Report – 1/30/2024",
  updated_at: "2024-01-31T17:16:47.806000Z",
  url: "https://blogs.nasa.gov/stationreport/2024/01/30/iss-daily-summary-report-1-30-2024/",
};

export const MOCK_ITEM_LIST: TMockItem[] = new Array(40).fill(MOCK_ITEM);

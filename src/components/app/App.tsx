import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "../../lib/const";
import PageLayout from "../layouts/PageLayout";
import MainPage from "../pages/MainPage";
import ReportPage from "../pages/ReportPage";
import NotFound from "../pages/NotFound";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MAIN} element={<PageLayout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.REPORT} element={<ReportPage />} />
          <Route path={AppRoute.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

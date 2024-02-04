import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "../../lib/const";
import PageLayout from "../layouts/PageLayout";
import MainPage from "../pages/MainPage";
import Login from "../layouts/Header/Login";
import ReportPage from "../pages/ReportPage";
import NotFound from "../pages/NotFound";
import "./App.css";
import Signup from "../layouts/Header/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<PageLayout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoutes.LOGIN} element={<Login />} />
          <Route path={AppRoutes.SIGNUP} element={<Signup />} />
          <Route path={AppRoutes.REPORT} element={<ReportPage />} />
          <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

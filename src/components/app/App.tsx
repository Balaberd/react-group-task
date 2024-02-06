import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/page-layout/page-layout";
import MainPage from "../pages/main-page/main-page";
import Login from "../pages/login/login";
import ReportPage from "../pages/report-page/report-page";
import NotFound from "../pages/not-found/not-found";
import Signup from "../pages/signup/signup";
import { AppRoutes } from "../../lib/types/AppRoutes";
import FavoritesPage from "../pages/favorites-pages/favorites-pages";
import PrivateRoute from "../blocks/private-route/private-route";
import HistoryPage from "../pages/history-page/history-page";
import "./App.css";
import React from "react";
import { ProjectAuthor } from "../../lib/types/ProjectAutor";



export const AuthorsContext = React.createContext<ProjectAuthor[] | null>(null);

export default function App() {

  const Authors: ProjectAuthor[] = [
    { nickname: `GayaneOrlova`, link: "https://github.com/GayaneOrlova" },
    { nickname: `woouwrti`, link: "https://github.com/woouwrti" },
    { nickname: `Balaberd`, link: "https://github.com/Balaberd/" },
  ];

  return (
    <AuthorsContext.Provider value={Authors}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<PageLayout />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoutes.Login} element={<Login />} />
            <Route path={AppRoutes.Signup} element={<Signup />} />
            <Route path={AppRoutes.Report} element={<ReportPage />} />
            <Route path={AppRoutes.Favorites} element={(
              <PrivateRoute isAuth={true}>
                <FavoritesPage />
              </PrivateRoute>
            )} />
            <Route path={AppRoutes.History} element={(
              <PrivateRoute isAuth={true}>
                <HistoryPage />
              </PrivateRoute>
            )} />
            <Route path={AppRoutes.NotFound} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthorsContext.Provider>
  );
}

import { Outlet } from "react-router";
import PageHeader from "../Header";
import style from "./style.module.css";
import Footer from "../Footer";

export default function PageLayout() {
  return (
    <div className={style.PageLayout}>
      <PageHeader />
      <main className={style.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
  return (
    <>
      <header>
        {/* <h1>Welcome!</h1> */}
      </header>
      <main>
        <Suspense fallback={<h3>Please, wait. It's loading...</h3>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <h1>You're welcome!</h1>
      </footer>
    </>
  );
};

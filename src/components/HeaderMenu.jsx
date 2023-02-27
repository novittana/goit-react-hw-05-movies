import { Outlet } from "react-router-dom";
import { Link, Header } from './App.styled';
import { Suspense } from "react";

export default function HeaderMenu() {
  return (
    <div className="container">
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}

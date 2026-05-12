import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


import AuthPage from "./pages/auth-page";
import LandingPage from "./pages/landing-page";
import Login from "./components/login";
import CreateUser from "./components/create-user";
import Dashboard from "./components/dashboard";


const router = createBrowserRouter([
  {
    path: "/auth",
    Component: AuthPage,
    children: [
      { path: "", Component: Login },
      { path: "create-user", Component: CreateUser },
    ],
  },
  {
    path: "/landing",
    Component: LandingPage,
    children: [
      { path: "", Component: Dashboard, },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <RouterProvider router={router} />
);

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import AuthPage from "./pages/auth-page";
import Login from "./components/login";
import CreateUser from "./components/create-user";


const router = createBrowserRouter([
  {
    path: "/",
    Component: AuthPage,
    children: [
      { path: "", Component: Login},
      { path: "create-user", Component: CreateUser},
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <RouterProvider router={router} />
);

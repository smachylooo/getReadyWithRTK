import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store/store"
import { BrowserRouter as Router } from "react-router-dom"; 
import App from "./App"
import "./index.css"
import { PostsPage, UsersPage } from "./pages"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostsPage />
  },
  {
    path: "/users",
    element: <UsersPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

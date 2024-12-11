import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root.jsx";
import Login from "../pages/Login.jsx";
import List from "../pages/List.jsx";
import Form from "../pages/Form/Form.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

export const router = createBrowserRouter([
    {path: '/', element: <Root />, errorElement: <ErrorPage />, children: [
        {path: '/login', element: <Login />},
        {path: '/employees', element: <List />},
        {path: '/new', element: <Form />}
    ]}
], {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  })
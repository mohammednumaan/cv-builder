import { createBrowserRouter, Navigate } from "react-router";
import App from "./App";
import Templates from "./components/templates/Templates";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/templates" />,
      },

      {
        path: "templates",
        element: <Templates />,
      },
    ],
  },
]);

export default router;

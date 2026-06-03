
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layot";

import NotFound from "./NotFout";

import { Comanda, Contact, Dom, Home, Nasha, OdnaDom } from "./router/router";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "nasha",
          element: <Nasha />,
        },
        {
          path: "comanda",
          element: <Comanda />,
        },
        {
          path: "houses",
          element: <Dom />,
        },
        {
          path: "odnadom",
          element: <OdnaDom />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/layout";
import Home from "./pages/home";
import MovieManagement from "./pages/movie-management";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/movie-management",
          element:<MovieManagement/>
        },
      ]
    },
    
  ]);
  return <RouterProvider router={router} />
}

export default App;

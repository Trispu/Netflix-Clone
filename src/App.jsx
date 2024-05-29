import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/layout";
import Home from "./pages/home";
import MovieManagement from "./pages/movie-management";
import Login from "./pages/login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/home",
          element:<Home/>
        },
        {
          path: "/movie-management",
          element:<MovieManagement/>
        },
        {
          path: "/",
          element:<Login/>
        },
      ]
    },
    
  ]);
  return <RouterProvider router={router} />
}

export default App;

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import MovieManagement from "./pages/movie-management";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/movie-management",
      element: <MovieManagement/>
    },
  ]);
  return <RouterProvider router={router} />
}

export default App;

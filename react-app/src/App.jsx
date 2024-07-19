import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);

function App() {
  return (
    <div className="flex justify-center items-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

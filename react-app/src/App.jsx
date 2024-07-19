import {
  RouterProvider,
  createBrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

// Mendefinisikan route
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/details",
//     element: <Details />,
//   },
// ]);

function App() {
  return (
    <div className="flex justify-center items-center">
      {/* react provider for object */}
      {/* <RouterProvider router={router} /> */}

      {/* Mendefinisikan route menggunakan jsx */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

// Body is being called from the App.jsx.
const Body = () => {
  // Individual objects of the array, represents individual paths and components to display.
  const appRouter = createBrowserRouter([
    { path: "/home", element: <Home /> },
    { path: "/login", element: <Login /> },
  ]);

  // return the router, so that it can display the content as per the path
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Feed from "./Feed";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

// Body is being called from the App.jsx.
const Body = () => {
  // Individual objects of the array, represents individual paths and components to display.
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
  ]);

  // return the router, so that it can display the content as per the path
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

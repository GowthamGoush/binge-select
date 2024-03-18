import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      element: <Login />,
      path: "/",
    },
    {
      element: <Browse />,
      path: "/browse",
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

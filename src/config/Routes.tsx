import { createBrowserRouter } from "react-router-dom";
import ProtectRoute from "@components/ProtectedRoute";
import Home from "@pages/Home";
import AppLayout from "@components/AppLayout";
import Error from "@components/Error";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectRoute>
        <AppLayout />
      </ProtectRoute>
    ),
    errorElement: <Error.InternalError />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

export default Routes;

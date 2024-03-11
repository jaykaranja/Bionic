import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "authentication",
        children: [
          {
            path: "sign-in",
            element: <SignIn />
          },
          {
            path: "sign-up",
            element: <SignUp />
          }
        ]
      },
    ]
  },
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GenreDetails from "./pages/Details/GenreDetails";
import LikedDetails from "./pages/Details/LikedDetails";
import ArtistDetails from "./pages/Details/ArtistDetails";
import AlbumDetails from "./pages/Details/AlbumDetails";
import Landing from "./pages/Home/Landing";

const queryClient = new QueryClient()

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
      {
        path: "genres",
        children: [
          {
            path: ":genre_id",
            element: <GenreDetails />
          }
        ]
      },
      {
        path: "liked-songs",
        children: [
          {
            path: "",
            element: <LikedDetails />
          }
        ]
      },
      {
        path: "playlist",
        children: [
          {
            path: ":playlist_id",
            element: <GenreDetails />
          }
        ]
      },
      {
        path: "artist",
        children: [
          {
            path: ":artist_id",
            element: <ArtistDetails />
          }
        ]
      },
      {
        path: "album",
        children: [
          {
            path: ":album_id",
            element: <AlbumDetails />
          }
        ]
      },
    ],
  },
  {
    path: "/home",
    element: <Landing />
  }
]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App

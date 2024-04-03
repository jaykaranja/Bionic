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
import { Toaster } from "react-hot-toast";
import PlaylistDetails from "./pages/Details/PlaylistDetails";
import AlbumByID from "./pages/Details/AlbumByID";

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
        path: "artists",
        element: <ArtistDetails />,
        children: [
          {
            path: ":artist_id",
            element: <ArtistDetails />
          }
        ]
      },
      {
        path: "albums",
        children: [
          {
            path: "",
            element: <AlbumDetails />
          },
          {
            path: ":album_id",
            element: <AlbumByID />
          }
        ]
      },
      {
        path: "playlists",
        children: [
          {
            path: ":playlist_id",
            element: <PlaylistDetails />
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
      <Toaster />
    </QueryClientProvider>
  )
}

export default App

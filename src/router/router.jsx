import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import MusicSiteLayout from "../layouts/MusicSiteLayout";
import MusicHome from "../pages/Music/MusicHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  // Music site for fan and artist
  {
    path: "/hype-music",
    element: <MusicSiteLayout />,
    children: [
      {
        path: "",
        element: <MusicHome />,
      },
    ],
  },

  // Catch-All Not Found Route
  {
    path: "*",
    element: <h1>Page Not Found</h1>,
  },
]);
export default router;

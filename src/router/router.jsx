import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import MusicSiteLayout from "../layouts/MusicSiteLayout";
import MusicHome from "../pages/Music/MusicHome";
import ContactUs from "../pages/Music/ContactUs";
import SignIn from "../pages/Music/auth/SignIn";
import Register from "../pages/Music/auth/Register";
import MusicDetails from "../pages/Music/MusicDetails";

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
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "music-details/:id",
        element: <MusicDetails />,
      },
      {
        path: "auth/signin",
        element: <SignIn />,
      },
      {
        path: "auth/register",
        element: <Register />,
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

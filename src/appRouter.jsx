import { createBrowserRouter } from "react-router-dom";

import Body from "./Components/Body";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Connections from "./Components/Connections";
import Requests from "./Components/Requests";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "connections",    
        element: <Connections />,
      },
      {
        path: "requests",    
        element: <Requests />,     
      },
    ],
  },
]);

export default appRouter;
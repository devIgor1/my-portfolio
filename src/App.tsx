import Home from "./home/page"
import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./layout"
import { AboutMe } from "./components/about"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/me",
        element: <AboutMe />,
      },
    ],
  },
  {},
])

export { router }

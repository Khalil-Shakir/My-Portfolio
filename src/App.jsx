import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/appLayout/AppLayout";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

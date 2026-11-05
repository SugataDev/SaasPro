import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <ProductsPage /> },
        { path: "pricing", element: <PricingPage /> },
        { path: "blog", element: <BlogPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

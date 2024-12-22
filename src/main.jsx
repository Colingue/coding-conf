import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import FormPage from "./pages/FormPage.jsx";
import TicketPage from "./pages/TicketPage.jsx";
import { RouterProvider } from "react-router";
import Layout from "./components/layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormPage />,
  },
  {
    path: "ticket",
    element: <TicketPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </StrictMode>
);

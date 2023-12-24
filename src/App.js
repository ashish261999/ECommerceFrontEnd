import React from "react";
import Home from "./page/home";
import Header from "./components/header";
import Footer from "./components/footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./page/cart";
import Login from "./page/login";
import Product from "./components/product";
// import productsData from "./api/api"

function Layout() {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

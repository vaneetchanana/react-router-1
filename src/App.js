import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import New from "./components/New";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Admin from "./components/Admin";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />}>
          {/* index route: when you have nested routes and you want a route to be rendered at parent url use index route. Index route will contain index prop instead of path prop, the path would be the same as the parent route */}
          <Route index element={<Featured />} />

          {/* what is special in the nested routes is that react router autimatically forms the full path to the children routes */}
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="/users" element={<Users />} >
          {/*
          Dynamic route: this routes renders a url parem which can be any value, so if we enter url with users/any-value it will render the UserDetail component. Dynamic route is smart enough to render only where there is no other match.
          Like below if you enter user/admin it will render the admin route not the dynamic route.
          We have here a nested dynamic route
          When dealing with a list detail pattern or if the route parameter can vary in value make use of dynamic routes.
          React Router will always try to match a more specific route first before matching a dynamic route.
           */}
          <Route path=":userId" element={<UserDetail />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        {/* this route is rendered when there is no other matching route */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
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
        {/* this route is rendered when there is no other matching route */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
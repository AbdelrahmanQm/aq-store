import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "./store/all-products-reducer/all-products-action";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Shop from "./Routes/Shop/Shop";
import BestSellers from "./Routes/TopAndBest/BestSellers";
import NewArrivals from "./Routes/TopAndBest/NewArrivals";
import ProudctPage from "./Routes/ProudctPage/ProudctPage";
import { ScrollToTop } from "./components/ScrollToTop";
import About from "./Routes/About/About";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await (
        await fetch("https://aq-store-api.onrender.com/fullStoreData")
      ).json();
      dispatch(setProducts(response));
    };
    fetchData();
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="best-sellers" element={<BestSellers />} />
          <Route path="new-arrivals" element={<NewArrivals />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "./assets/boxicons-2.1.1/boxicons-2.1.1/css/boxicons.min.css";
import "swiper/swiper-bundle.css";

import Header from "./components/header/Header";
import RoutesALL from "./config/RoutesAll";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <RoutesALL />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

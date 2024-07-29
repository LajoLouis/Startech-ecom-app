import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Production from "./components/Production";
import Products from "./components/pages/Products";
import TopSelling from "./components/TopSelling";
import { EcomProvider } from "./context/EcomContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/pages/Detail";
import Alert from "./components/Alert";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import ThankYou from "./components/pages/ThankYou";
import { AuthProvider } from "./context/AuthContext";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const { getItem } = useLocalStorage("auth-token");
  const token = getItem();
  let authInitialState = { accessToken: token ?? null };
  return (
    <>
      <div>
        <AuthProvider defaultState={authInitialState}>
          <EcomProvider>
            <Router>
              <div className="bg-[url('/img/psbg2.jpg')] bg-center bg-opacity-15 ">
                <div className="mb-[100px]">
                  <Header />
                </div>
                <Alert />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Featured />
                        <TopSelling />
                      </>
                    }
                  />
                  <Route path="/products" element={<Products />} />
                  <Route path="/detail/:id" element={<Detail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/thank-you" element={<ThankYou />} />
                </Routes>
                <Footer />
              </div>
            </Router>
          </EcomProvider>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;

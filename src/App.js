import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MyRoutes from "./MyRoutes";
import ProductContextProvider from "./components/Context/ProductContextProvider";
import CartContextProvider from "./components/Context/CartContextProvider";
import AuthContextProvider from "./components/Context/AuthContextProvider";
import CheckOutContextProvider from "./components/Context/CheckOutContextProvider";

function App() {
  return (
    <div className="App">
      <CheckOutContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <AuthContextProvider>
              <Navbar />
              <MyRoutes />
            </AuthContextProvider>
          </ProductContextProvider>
        </CartContextProvider>
      </CheckOutContextProvider>
    </div>
  );
}

export default App;

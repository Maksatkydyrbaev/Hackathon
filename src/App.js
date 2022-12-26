import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MyRoutes from "./MyRoutes";
import ProductContextProvider from "./components/Context/ProductContextProvider";
import CartContextProvider from "./components/Context/CartContextProvider";
import AuthContextProvider from "./components/Context/AuthContextProvider";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <ProductContextProvider>
          <AuthContextProvider>
            <Navbar />
            <MyRoutes />
          </AuthContextProvider>
        </ProductContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;

import "./App.css";
import ProductContextProvider from "./components/Context/ProductContextProvider";
import Navbar from "./components/Navbar/Navbar";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Navbar />
        <MyRoutes />
      </ProductContextProvider>
    </div>
  );
}

export default App;

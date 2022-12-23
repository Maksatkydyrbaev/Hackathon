import React, { createContext, useReducer } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { API } from "../../helpers/const";

export const productContext = createContext();

const INIT_STATE = {
  products: [],
  productDetails: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    // case "GET_PRODUCT_DETAIL":
    //   return { ...state, productDetails: action.payload };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();

  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      let res = await axios.get(`${API}`);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //   const getProductDetails = async (id) => {
  //     const res = await axios.get(`${API}/${id}`);
  //     dispatch({
  //       type: "GET_PRODUCT_DETAIL",
  //       payload: res.data,
  //     });
  //   };

  //   const saveEditProduct = async (newProduct, id) => {
  //     await axios.patch(`${API}/${id}`, newProduct);
  //     getProducts();
  //   };

  //   const addProduct = async (prod) => {
  //     try {
  //       let res = await axios.post(API, prod);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   const deleteProduct = async (id) => {
  //     await axios.delete(`${API}/${id}`);
  //     getProducts();
  //   };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        productDetails: state.productDetails,
        // addProduct,
        getProducts,
        // deleteProduct,
        // getProductDetails,
        // saveEditProduct,
        // fetchByParams,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;

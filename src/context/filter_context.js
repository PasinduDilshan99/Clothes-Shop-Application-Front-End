import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  UPDATE_CLOTHES,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  UPDATE_MALE_FEMALE,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  maleUp: 0,
  maleDown: 0,
  femaleUp: 0,
  femaleDown: 0,
  maleFemale: false,
  sort: "price-lowest",
  filters: {
    text: "",
    gen: "all",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  // console.log("products");
  // console.log(products);
  // console.log("products");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    //const name = e.target.name;
    const value = e.target.value;
    // console.log(value);
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateMaleFemale = (e) => {
    let value = e.target.checked;

    dispatch({ type: UPDATE_MALE_FEMALE, payload: value });
  };

  const updateClothes = (e1) => {
    let name = "";
    let a = 0;
    a = e1 % 4;
    // console.log(a);
    // console.log(name1);
    if (a === 0) {
      name = "maleUp";
    }
    if (a === 1) {
      name = "maleDown";
    }
    // if (name1 === "femaleUp") {
    //   value1 = e.target.textContent;
    // }
    // if (name1 === "femaleDown") {
    //   value1 = e.target.textContent;
    // }
    dispatch({ type: UPDATE_CLOTHES, payload: { name, e1 } });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(name);
    // console.log(value);
    if (name === "gen") {
      value = e.target.textContent;
    }
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
        updateMaleFemale,
        updateClothes,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};

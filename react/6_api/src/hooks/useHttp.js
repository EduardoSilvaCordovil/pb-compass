import axios from "axios";
import { useReducer, useEffect } from "react";

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return { date: null, error: null, loading: true };
    case "SUCESS":
      return { date: action.responseData, error: null, loading: false };
    case "ERROR":
      return { date: null, error: action.errorMessage, loading: false };
    default:
      return state;
  }
};

const useHttp = (url, method = "GET", body = null, dependencies = []) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    loading: false,
    data: null,
    error: null,
  });
  
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SEND" });
      try {
        const response = await axios({ url, method, data: body });
        dispatch({ type: "SUCESS", responseData: response.data });
      } catch (error) {
        dispatch({ type: "ERROR", errorMessage: "ALGO DEU ERRADO" });
      }
    };
    fetchData();
  }, dependencies);
  return httpState;
};

export default useHttp;

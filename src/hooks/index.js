import { useState, useEffect, useReducer } from "react";
import http from "@/utils/http";

export function useProducts(url) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const products = await http(url);
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {
      //
    };
  }, []);
  return [products];
}
export function useDetail(url) {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const detail = await http(url);
        setDetail(detail);
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {
      //
    };
  }, []);
  return [detail];
}

export function useCounter(defaultValue, max) {
  function counterReducer(count, { type, payload }) {
    switch (type) {
      case "PLUS":
        if (count + 1 > max) return count;
        return (count += 1);
      case "MINUS":
        if (count - 1 < 0) return count;
        return (count -= 1);
      case "INPUT":
        console.log(payload);
        if (payload >= 0 && payload <= max) {
          count = payload;
        }
        return count;
      default:
        return count;
    }
  }
  const [count, dispatch] = useReducer(counterReducer, defaultValue);
  return [count, dispatch];
}

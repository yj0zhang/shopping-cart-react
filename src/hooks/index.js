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
        if (payload >= 0 && payload <= max) {
          count = Number(payload);
        }
        return count;
      default:
        return count;
    }
  }
  const [count, dispatch] = useReducer(counterReducer, defaultValue);
  return [count, dispatch];
}

export function useCart(cartData) {
  function cardReducer(cartList, { type, payload }) {
    switch (type) {
      case "ADD":
        const cid = new Date().getTime();
        payload.cid = cid;
        return [payload, ...cartList];
      case "DELETE":
        //payload是商品id
        return cartList.filter((item) => item.id !== payload);
      case "MODIFY":
        return cartList.map((item) => {
          if (item.id === payload.id) {
            item.count = payload.count;
          }
          return item;
        });
      default:
        return cartList;
    }
  }
  const [cartList, dispatch] = useReducer(cardReducer, cartData);
  return [cartList, dispatch];
}

export function useTotalPrice(cartList) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(computeTotal(cartList));
  }, [cartList]);
  function computeTotal(cartList) {
    return cartList.reduce((prev, next) => {
      const total = Number(next.price) * Number(next.count);
      prev += total;
      return prev;
    }, 0);
  }
  return [total, setTotal];
}

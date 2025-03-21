import { useState, useEffect } from "react";
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

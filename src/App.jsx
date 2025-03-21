import {
    createContext,
    useMemo,
} from 'react';
import {
    createHashRouter,
    RouterProvider
} from 'react-router-dom';

import router from '@/config/router';
import { useCart, useProducts } from './hooks';

const routerConfig = createHashRouter(router);

export const ProductContext = createContext();
export const CartContext = createContext();

function App() {
    const [products] = useProducts('/products');
    const [cartList, cartDispatch] = useCart([]);
    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={{cartList, cartDispatch}}>
                <RouterProvider router={routerConfig} />
            </CartContext.Provider>
        </ProductContext.Provider>
    )
}
export default App;
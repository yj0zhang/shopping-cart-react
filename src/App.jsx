import {
    createContext,
    useMemo,
} from 'react';
import {
    createHashRouter,
    RouterProvider
} from 'react-router-dom';

import router from '@/config/router';
import { useProducts } from './hooks';

const routerConfig = createHashRouter(router);

export const ProductContext = createContext();

function App() {
    const [products] = useProducts('/products');
    return (
        <ProductContext.Provider value={products}>
            <RouterProvider router={routerConfig} />
        </ProductContext.Provider>
    )
}
export default App;
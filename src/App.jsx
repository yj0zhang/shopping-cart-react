import {
    useEffect
} from 'react';
import {
    createHashRouter,
    RouterProvider
} from 'react-router-dom';

import router from '@/config/router';
import http from '@/utils/http';

const routerConfig = createHashRouter(router);

function App() {
    useEffect(() => {
        ; (async () => {
            const products = await http('/products');
            console.log(products)
        })();
        return () => {
            //
        }
    }, []);
    useEffect(() => {
        ; (async () => {
            const detail = await http('/detail/2');
            console.log(detail)
        })();
        return () => {
            //
        }
    }, []);
    return (
        <RouterProvider router={ routerConfig } />
    )
}
export default App;
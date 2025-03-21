import {
    useContext,
    useMemo
} from 'react';
import {
    Outlet,
    Link
} from 'react-router-dom';
import { ProductContext } from '../App';

function Home() {
    const products = useContext(ProductContext);
    const hotList = useMemo(() => products.filter(item => item.hot), [products]);
    const highList = useMemo(() => products.filter(item => item.high), [products]);

    return (
        <div>
            <h1>首页</h1>
            <Link to="/">精品列表</Link>&nbsp;
            <Link to="/hot_list">热门列表</Link>&nbsp;
            <Link to="/list">全部列表</Link>&nbsp;
            <Outlet context={{hotList, highList}}/>
        </div>
    )
}

export default Home;
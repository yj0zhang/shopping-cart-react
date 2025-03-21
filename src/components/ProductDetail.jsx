import {
    Link
} from 'react-router-dom';
import Counter from './Counter';
import { useContext, useMemo } from 'react';
import { CartContext } from '@/App';

function ProductDetail({ data }) {
    const { cartList, cartDispatch } = useContext(CartContext);
    const currentCount = useMemo(() => {
        const temp = cartList.find(item => item.id === data.id);
        return temp?.count ?? 0;
    }, [data])
    return (
        <div>
            <img src={data.image} height={200} alt="" />
            <h1>{data.name}</h1>
            <p>{data.intro}</p>
            <p>{data.price}</p>
            <Counter
                id={data.id}
                max={data.max_order}
                cartList={cartList}
                cartDispatch={cartDispatch}
                detail={data}
                currentCount={currentCount}
            />
            <Link to="/cart">购物车</Link>
        </div>
    )
}

export default ProductDetail;
import {
    Link
} from 'react-router-dom';
import Counter from './Counter';

function ProductDetail({ data }) {
    return (
        <div>
            <img src={data.image} height={200} alt="" />
            <h1>{data.name}</h1>
            <p>{data.intro}</p>
            <p>{data.price}</p>
            <Counter id={data.id} max={ data.max_order} />
            <Link to="/cart">购物车</Link>
        </div>
    )
}

export default ProductDetail;
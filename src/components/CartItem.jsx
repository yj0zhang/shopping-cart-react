import {
    Link
} from 'react-router-dom';
import Counter from './Counter';

function CartItem({ data, cartList, cartDispatch }) {
    return (
        <div style={{boxShadow: '1px 2px 4px #eee', borderRadius: '4px'}}>
            <Link to={`/detail/${data.id}`}>
                <img src={data.image} height={200} />
            </Link>
            <div>
                <h1>{data.name}</h1>
                <p>{data.price}</p>
                <div>
                    <Counter
                        id={data.id}
                        max={data.max_order}
                        cartList={cartList}
                        cartDispatch={cartDispatch}
                        detail={data}
                        currentCount={data.count}
                    />
                </div>
            </div>
        </div>
    )
 }

export default CartItem
import {
    Link
} from 'react-router-dom';

function ProductItem({ data }) {
    return (
        <div style={{boxShadow: '1px 2px 4px #eee', borderRadius: '4px'}}>
            <Link to={`/detail/${data.id}`}>
                <img src={data.image} height={200} />
            </Link>
            <div>
                <h1>{data.name}</h1>
                <p>{ data.price }</p>
            </div>
        </div>
    )
 }

export default ProductItem
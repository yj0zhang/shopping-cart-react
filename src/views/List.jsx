import {
    Link
} from 'react-router-dom';
import {
    ProductContext
} from '@/App'
import ProductItem from '../components/ProductItem';
function List() {
    return (
        <div>
            <Link to="/">返回</Link>
            <h1>全部商品列表</h1>
            <ProductContext.Consumer>
                {
                    products => (
                        <div>
                            {
                                products?.map(product => <ProductItem data={product} key={ product.id} />)
                            }
                        </div>
                    )
                }
            </ProductContext.Consumer>
        </div>
    )
}

export default List;
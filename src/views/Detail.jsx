import {
    useParams,
    useNavigate
} from 'react-router-dom';
import { useDetail } from '@/hooks';
import ProductDetail from '@/components/ProductDetail'

function Detail() {
    const { id } = useParams();
    const nav = useNavigate();

    const goback = () => {
        nav(-1);
    }
    const [detail] = useDetail(`/detail/${id}`)
    return (
        <div>
            <a href="#" onClick={goback}>返回</a>
            <h1>商品详情</h1>
            <div>
                <ProductDetail data={detail}></ProductDetail>
            </div>
        </div>
    )
}

export default Detail;
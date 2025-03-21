import { useOutletContext } from "react-router";
import ProductItem from "@/components/ProductItem";

function HighList() {
    const { highList } = useOutletContext();
    return (
        <div>
            <h1>精品列表</h1>
            <div style={{display: 'flex', gap: '20px'}}>
            {
            highList.map(product => (
                <ProductItem data={product} key={product.id} />
            ))
            }
            </div>
        </div>
    )
}
export default HighList;
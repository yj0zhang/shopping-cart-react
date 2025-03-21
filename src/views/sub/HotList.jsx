import { useOutletContext } from "react-router";
import ProductItem from "@/components/ProductItem";

function HotList() {
    const { hotList } = useOutletContext()
    return (
            <div>
                <h1>热门列表</h1>
            <div style={{ display: 'flex', gap: '20px'}}>
                {
                hotList.map(product => (
                    <ProductItem data={product} key={product.id} />
                ))
                }
                </div>
            </div>
        )
}
export default HotList;
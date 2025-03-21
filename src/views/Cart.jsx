import { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../App";
import CartItem from "@/components/CartItem";
import { useTotalPrice } from "../hooks";

function Cart() {
    const nav = useNavigate();
    const goback = () => {
        nav(-1)
    }
    const { cartList, cartDispatch } = useContext(CartContext);
    const [total] = useTotalPrice(cartList);
    return (
        <div>
            <a href="#" onClick={goback}>返回</a>
            <h1>购物车列表</h1>
            <div>
                {
                    cartList?.map(item => {
                        return (
                            <CartItem
                                data={item}
                                cartDispatch={cartDispatch}
                                cartList={cartList}
                                key={item.cid}
                            />
                        )
                    })
                }
            </div>
            <div>共计{ total}</div>元
        </div>
    )
}

export default Cart;
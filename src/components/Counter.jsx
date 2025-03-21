import { useEffect } from "react";
import { useCounter } from "../hooks";

function Counter({
    id,
    max,
    cartList,
    cartDispatch,
    detail,
    currentCount
 }) {
    const [count, counterDispatch] = useCounter(currentCount, max);

    useEffect(() => {
        console.log('currentCount', currentCount)
        counterDispatch({ type: 'INPUT', payload: currentCount })
    }, [currentCount]);

    useEffect(() => {
        console.log('count', count)
        if (count === 0) {
            cartDispatch({type: 'DELETE', payload: id})
        } else {
            const current = cartList.find(item => item.id === id);
            if (current) {
                cartDispatch({
                    type: "MODIFY", payload: {
                        id,
                        count
                    }
                });
            } else {
                cartDispatch({
                    type: 'ADD', payload: {
                        ...detail,
                        count,
                    }
                });
            }
        }
    }, [count])

    const doMinus = () => counterDispatch({ type: 'MINUS' });
    const doPlus = () => counterDispatch({ type: 'PLUS' });
    const doInput = (e) => counterDispatch({ type: 'INPUT', payload: e.currentTarget.value });
    return (
        <div>
            <button onClick={doMinus}>-</button>
            <input type="number" value={ count} onChange={doInput}/>
            <button onClick={doPlus}>+</button>
        </div>
    )
}

export default Counter;
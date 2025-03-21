import { useCounter } from "../hooks";

function Counter({ id, max }) {
    const [count, counterDispatch] = useCounter(0, max);
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
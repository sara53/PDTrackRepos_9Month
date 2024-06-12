import { useDispatch, useSelector } from "react-redux"

export function Counter() {

    const { count } = useSelector( ( state ) => state.counterSlice )


    const dispatch = useDispatch();

    const increaseHandler = () => {
        dispatch( { type: 'INCREASE', payload: 5 } )
    }
    const decreaseHandler = () => {
        dispatch( { type: "DECREASE", payload: 2 } )
    }
    return (
        <div className="alert alert-info">
            <div className="container">
                <h2>Counter Component</h2>
                <p className="lead fs-4 text-dark">Count : {count}</p>
                <button onClick={increaseHandler} className="btn btn-success mx-1">+</button>
                <button onClick={decreaseHandler} className="btn btn-danger mx-1">-</button>
            </div>
        </div>
    )
}

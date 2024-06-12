import { useDispatch, useSelector } from "react-redux"
import { counterActions } from '../store/counterSlice'
export function Counter() {


    const { increase, decrease } = counterActions

    const { count } = useSelector( state => state.mySlice )

    const dispatch = useDispatch();

    const increaseHandler = () => {
        dispatch( increase( 5 ) )
    }
    const decreaseHandler = () => {
        dispatch( decrease() )
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

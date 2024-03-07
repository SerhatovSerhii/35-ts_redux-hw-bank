import { useState } from 'react';
import { deposit, withdraw } from '../actions/accountActions';
import { useDispatch } from 'react-redux';

const Operation = () => {
    const [sum, setSum] = useState(0);
    sum < 0 ? setSum(0) : sum
    const dispatch = useDispatch();

    return (
        <div className="d-flex justify-content-center">
            <button 
                className="btn btn-primary btn-lg"
                onClick={() => dispatch(withdraw(sum))}>Withdraw</button>
            <input 
                className="form-control-lg text-center"
                onChange={e => setSum(+e.target.value)}
                type="number"
                value={sum}
            />
            <button className="btn btn-primary btn-lg"
                    onClick={() => dispatch(deposit(sum))}>Deposit</button>
        </div >
    )
}

export default Operation



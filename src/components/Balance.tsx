import { useSelector } from "react-redux";
import { RootState } from "../utils/types";


const Balance = () => {
const balance = useSelector<RootState, number>(state => state.balance);

  return (
    <div className="text-center text-uppercase">
      <h1>Iron Bank of Amerika</h1>
      <h2>Balance = {balance}</h2>
    </div>
  )
}

export default Balance



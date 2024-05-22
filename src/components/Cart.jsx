import { useSelector } from 'react-redux';
import { cartSelector } from '../redux/slices/cartSlice';
const Cart = () => {
    const items = useSelector(cartSelector);
    console.log("items: ",items);
    let totalPrice = items.reduce((a,b) => a + b.price,0)
    return (
        <div className="alert alert-success">
            <h3 className="text-center">Total items: {items.length}({totalPrice})</h3>
        </div>
    )
}
export default Cart;
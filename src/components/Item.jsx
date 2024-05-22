import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/slices/cartSlice";

const Item = (props) => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(
            addItem({
                price: props.price,
                name: props.name
            })
        )
    }
    return (
        <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={props.image} alt={props.name}/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Price: {props.price}</p>
          <button className="btn btn-primary" onClick={clickHandler}>Add to cart</button>
        </div>
      </div>
    )
}
export default Item;
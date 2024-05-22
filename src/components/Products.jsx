import productsArray from '../products.json';
import Item from './Item';

const Products = () => {
    console.log('json file: ',productsArray);
    return (
        <>
            {
                productsArray.map((product) => 
                    <Item key={product.id} image={product.image} price={product.price} name={product.productName}/>
                )
            }
        </>
    )
}
export default Products;
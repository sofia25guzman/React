import { FaShoppingCart } from 'react-icons/fa';  

const CartWidget = () => {
return (
    <div>
    <FaShoppingCart style={{ fontSize: '24px' }} />
    <span>0</span>
    </div>
);
};

export default CartWidget;


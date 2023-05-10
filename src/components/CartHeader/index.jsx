import useFetch from '../useFetch';
import {serverPath} from "./../../helpers/variables";

import "./style.scss";

const CartHeader = () => {

    const {isLoading} = useFetch(serverPath);
    return (
		<header className='cart-header'>
			<div className='cart-header__title'>наименование</div>
			<div className='cart-header__count'>количество</div>
			<div className='cart-header__cost'>стоимость</div>

            {isLoading && <h2 className='load'>Loading</h2>}
		</header>
	);
}

export default CartHeader;
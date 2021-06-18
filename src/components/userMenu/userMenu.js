import CarInfo from '../carInfo/carInfo';
import Tabs from '../common/tabs/tabs';
import PartsShop from '../partsShop/partsShop';
import './userMenu.css';

const UserMenu = () => {

    const carInfo = <CarInfo />;

    const partsShop = <PartsShop />;

    return (
        <div className="user-menu">
            <Tabs 
                titles={['Инфа', 'Дитоли']}
                pages={[ carInfo, partsShop ]}/>
        </div>
    )
}

export default UserMenu;

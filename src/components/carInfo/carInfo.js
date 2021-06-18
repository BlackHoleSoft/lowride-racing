import { observer } from 'mobx-react';
import carStore from '../../stores/carStore';
import './carInfo';

const CarInfo = () => {
    const {car, engine, kpp} = carStore;

    return (
        <div className="car-info">
            <div>{car.name}</div>
            <div><img width="200px" src={car.img}/></div>
            <div>Вес: {car.weight + engine.weight + kpp.weight}</div>
            <div>Двигатель: {engine.name}</div>
            <div>Объем: {engine.volume}</div>
            <div>Цилиндров: {engine.cylinders}</div>
            <div>Клапанов: {engine.cylinders * engine.valves}</div>
            <div>КПП: {kpp.name}</div>
        </div>
    );
}

export default observer(CarInfo);
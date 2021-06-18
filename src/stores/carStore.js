import { observable } from "mobx";
import { gaz24 } from "./cars";
import { zmz24d } from "./engines";
import { gaz24kpp } from "./kpp";

class CarStore {
    car = observable({...gaz24});
    engine = observable({...zmz24d});
    kpp = observable({...gaz24kpp})
}

export default new CarStore();
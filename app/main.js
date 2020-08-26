import CarsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/HousesController.js";
console.log(4)
class App {
  carsController = new CarsController();
  housesController = new HousesController();
}

window["app"] = new App();

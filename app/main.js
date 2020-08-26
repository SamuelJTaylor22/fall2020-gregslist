import CarsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/HousesController.js";
import JobsController from "./Controllers/JobsController.js";
console.log(4)
class App {
  carsController = new CarsController();
  housesController = new HousesController();
  jobsController = new JobsController();
}

window["app"] = new App();

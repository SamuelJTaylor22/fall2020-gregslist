import Car from "./Models/Car.js";
import House from "./Models/House.js";
import Job from "./Models/Job.js";
console.log(1);

let _state = {
  /** @type {Car[]} */
  cars: [
    new Car({ make: "Tesla", model: "Cybertruck", year: 2020, price: 100000, img: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/11/tesla_pickup.png", description: "It's like living in the future, with 1 broken window." }),
    new Car({ make: "Mystery", model: "Machine", year: 1987, price: 1000, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-classic-mystery-machine-replica-van-built-by-jerry-news-photo-1587131341.jpg?crop=1.00xw:0.753xh;0,0.176xh&resize=1200:*", description: "Smells like meddling teenagers and a dog" }),
    new Car({ make: "Jeep", model: "Wrangler", year: 1987, price: 1000, img: "https://vignette.wikia.nocookie.net/jurassicpark/images/e/e7/Jurassic-park-jeep3-1-.jpg/revision/latest/scale-to-width-down/340?cb=20090417212624", description: "Are those teeth marks?" })
  ],
  /** @type {House[]} */
  houses: [ new House({ bed: 1, bath: 1, year: 2020, price: 100000, img: "//placehold.it/200x200", description: "Actually just a grey box"  }),new House({ bed: 1, bath: 1, year: 2020, price: 100000, img: "//placehold.it/200x200", description: "Actually just a black box"  }), new House({ bed: 1, bath: 1, year: 2020, price: 100000, img: "//placehold.it/200x200", description: "Actually just a white box"  })
  ],
  /** @type {Job[]} */
  jobs: [ new Job ({position: "Junior Dev", company: "Amazon", pay: .69, img: "//placehold.it/200x200", description: "Alternate pay: 3 nickels and a pop tart"})]
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;

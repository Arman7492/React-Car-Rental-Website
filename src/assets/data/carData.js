// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "",
    rating: 7,
    carName: "Equipment 'Light'",
    imgUrl: img01,
    model: "Model-2024",
    price: 3990,
    speed: "90kmpl",
    gps: "free ski pass",
    seatType: "Gloves made of PU (polyurethane).",
    automatic: "Manual adjustment",
    description:
      "Weekend equipment for those who want to ride lightly.",
  },



  {
    id: 6,
    brand: "",
    rating: 10,
    carName: "Full equipment",
    imgUrl: img06,
    model: "Model-2024",
    price: 6990,
    speed: "110kmpl",
    gps: "free ski pass",
    seatType: "Teflon (ePTFE) gloves",
    automatic: "Automatic adjustment",
    description:
      " Full equipment for those who want to fully immerse themselves in extreme skiing.",
  },

  // {
  //   id: 7,
  //   brand: "Audi",
  //   rating: 82,
  //   carName: "Audi Fiesta",
  //   imgUrl: img07,
  //   model: "Model 3",
  //   price: 50,
  //   speed: "20kmpl",
  //   gps: "GPS Navigation",
  //   seatType: "Heated seats",
  //   automatic: "Automatic",
  //   description:
  //     " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  // },

  // {
  //   id: 8,
  //   brand: "Colorado",
  //   rating: 52,
  //   carName: "Rolls Royce Colorado",
  //   imgUrl: img08,
  //   model: "Model 3",
  //   price: 50,
  //   speed: "20kmpl",
  //   gps: "GPS Navigation",
  //   seatType: "Heated seats",
  //   automatic: "Automatic",
  //   description:
  //     " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  // },
];

export default carData;

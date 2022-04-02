import room1 from "./assets/images/details-1.jpeg";
import room2 from "./assets/images/details-2.jpeg";
import room3 from "./assets/images/details-3.jpeg";
import room4 from "./assets/images/details-4.jpeg";
import img1 from "./assets/images/room-1.jpeg";
import img2 from "./assets/images/room-2.jpeg";
import img3 from "./assets/images/room-3.jpeg";
import img4 from "./assets/images/room-4.jpeg";
import img5 from "./assets/images/room-5.jpeg";
import img6 from "./assets/images/room-6.jpeg";
import img7 from "./assets/images/room-7.jpeg";
import img8 from "./assets/images/room-8.jpeg";
import img9 from "./assets/images/room-9.jpeg";
import img10 from "./assets/images/room-10.jpeg";
import img11 from "./assets/images/room-11.jpeg";
import img12 from "./assets/images/room-12.jpeg";

const data = [
  {
    id: "1",
    name: "Hotel Hitlon",
    rating: "5.0",
    img: [room1, img1, img2, img9],
    location: "Pune",
    price: "₹4,700",
    condition: "Good",

    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "2",
    name: "Hotel Zhavier",
    rating: "4.3",
    img: [room2, img1, img7, img3],
    location: "Mumbai",
    price: "₹2,900",
    condition: "Very Good",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "3",
    name: "Hotel Intop",
    rating: "4.9",
    location: "Mumbai",
    price: "₹4,900",
    condition: "Very Good",
    img: [room3, img8, img2, img3],

    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "4",
    name: "Sky High",
    rating: "5.0",
    location: "Chennai",
    price: "₹5,500",
    condition: "Good",
    img: [room4, img9, img2, img3],

    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "5",
    name: "Babu bhai",
    rating: "4.5",
    location: "Delhi",
    price: "₹4,500",
    condition: "Very Good",
    img: [room1, img4, img5, img6],

    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "6",
    name: "Lorem Dada Ipsum",
    rating: "5.0",
    img: [room2, img10, img2, img11],
    location: "Bangalore",
    price: "₹6,500",
    condition: "Very Good",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "7",
    name: "Keys Keys Keys",
    rating: "4.7",
    location: "Bangalore",
    price: "₹2,500",
    condition: "Very Good",

    img: [room3, img1, img2, img3],

    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "8",
    name: "The Best Hotel",
    rating: "4.9",
    location: "Delhi",
    price: "₹3,700",
    condition: "Very Good",

    img: [room4, img4, img5, img6],

    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "9",
    name: "Presidential",
    rating: "5.0",
    img: [room1, img10, img11, img3],
    location: "Pune",
    price: "₹4,700",
    condition: "Good",

    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "10",
    name: "Vice City",
    rating: "4.3",
    img: [room2, img1, img2, img3],
    location: "Mumbai",
    price: "₹2,900",
    condition: "Very Good",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "11",
    name: "Tyler's Creation",
    rating: "4.9",
    location: "Mumbai",
    price: "₹4,900",
    condition: "Very Good",
    img: [room3, img11, img12, img3],

    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "12",
    name: "La Tunechi",
    rating: "5.0",
    location: "Chennai",
    price: "₹5,500",
    condition: "Good",
    img: [room4, img12, img10, img9],

    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "13",
    name: "Heavens Garden",
    rating: "5.0",
    img: [room1, img10, img12, img3],
    location: "Pune",
    price: "₹4,700",
    condition: "Good",

    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "14",
    name: "The Return",
    rating: "4.3",
    img: [room2, img11, img12, img3],
    location: "Mumbai",
    price: "₹2,900",
    condition: "Very Good",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
];
export default data;

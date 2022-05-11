import CarItem from "../Item/CarItem";
import styles from "./CarList.module.css"

const CARS = [
    {id: 1, title: "Shrimp and Chorizo Paella", image: "/images/car.jpg", description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."},
    {id: 2, title: "Shrimp and Chorizo Paella", image: "/images/car.jpg", description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."},
    {id: 3, title: "Shrimp and Chorizo Paella", image: "/images/car.jpg", description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."},
    {id: 4, title: "Shrimp and Chorizo Paella", image: "/images/car.jpg", description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."},
]

function CarList() {
    return(
        <div className={styles.car_list_container}>
            {CARS.map(car => <CarItem key={car.id} car={car} />)}
        </div>
    );
}

export default CarList;
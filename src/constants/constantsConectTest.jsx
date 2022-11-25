export const categoryList = [
    {
      id: 1,
      value: 'place',
      label: 'Nuevo',
    },
    {
      id: 2,
      value: 'dish',
      label: 'Usado',
    },
  ];
  
  export const ratingList = [
    {
      id: 1,
      value: '1',
      label: '1🌟',
    },
    {
      id: 2,
      value: '2',
      label: '2🌟',
    },
    {
      id: 3,
      value: '3',
      label: '3🌟',
    },
    {
      id: 4,
      value: '4',
      label: '4🌟',
    },
    {
      id: 5,
      value: '5',
      label: '5🌟',
    },
  ];

//   export const dataList2 = async (camList, rangoPrecio, marcaCamara) => {

//     const vehicleData =[];
//     const resp = await fetch('json/vehicles.json')
//     const data = await resp.json()
//     let i = 0;
//     data.forEach((vehicle) => {
//       vehicle.id,
//       vehicle.brand,
//       vehicle.model,
//       vehicle.year,
//       vehicle.km
//     })

//     for (let i = 0; i < camList.length; i++) {
//         let { precio, nombreProdu } = camList[i]
//         rangoPrecio >= precio ? camProcessCorrect(camList, nombreProdu) : processIncorrect()
//         break
//     }
// }
  
  export const dataList = [
    
    {
      id: 1,
      title: 'bmw',
      serviceTime: '45-60min',
      deliveryFee: 3.44,
      category: 'place',
      cuisine: 'Bmw',
      rating: 5,
      price: 2500,
      coverSrc: '/images/newCars/bmw.jpg',
    },
    {
      id: 2,
      title: 'camaro',
      serviceTime: '15-20min',
      deliveryFee: 4.94,
      category: 'Chevrolet',
      cuisine: 'italian',
      rating: 4,
      price: 1000,
      coverSrc: '/images/newCars/camaro.jpg',
    },
    {
      id: 3,
      title: 'ferrari',
      serviceTime: '30-22min',
      deliveryFee: 4.94,
      category: 'place',
      cuisine: 'Ferrari',
      rating: 3,
      price: 2000,
      coverSrc: '/images/newCars/ferrari.jpg',
    },
    {
      id: 4,
      title: 'ford',
      serviceTime: '10-18min',
      deliveryFee: 2.14,
      category: 'place',
      cuisine: 'Ford',
      rating: 1,
      price: 1800,
      coverSrc: '/images/newCars/ford.jpg',
    },
    {
      id: 5,
      title: 'hyundai',
      serviceTime: '25-30min',
      deliveryFee: 6.79,
      category: 'place',
      cuisine: 'Hyundai',
      rating: 5,
      price: 2000,
      coverSrc: '/images/newCars/hyundai.jpg',
    },
    {
      id: 6,
      title: 'peugeot',
      serviceTime: '5-15min',
      deliveryFee: 2.87,
      category: 'place',
      cuisine: 'Peugeot',
      rating: 5,
      price: 3500,
      coverSrc: '/images/newCars/peugeot.jpg',
    },
    {
      id: 7,
      title: 'usado 1',
      serviceTime: '50-65min',
      deliveryFee: 8.5,
      category: 'dish',
      cuisine: 'Bmw',
      rating: 2,
      price: 2200,
      coverSrc: '/images/usedCars/used1.jpg',
    },
    {
      id: 8,
      title: 'usado 2',
      serviceTime: '10-15min',
      deliveryFee: 1.8,
      category: 'dish',
      cuisine: 'Bmw',
      rating: 1,
      price: 1900,
      coverSrc: '/images/usedCars/used2.jpg',
    },
    {
      id: 9,
      title: 'usado 3',
      serviceTime: '12-18min',
      deliveryFee: 3.33,
      category: 'dish',
      cuisine: 'Bmw',
      rating: 4,
      price: 2750,
      coverSrc: '/images/usedCars/used3.jpg',
    },
    {
      id: 10,
      title: 'usado 4',
      serviceTime: '30-38min',
      deliveryFee: 1.9,
      category: 'dish',
      cuisine: 'Bmw',
      rating: 2,
      price: 4350,
      coverSrc: '/images/usedCars/used4.jpg',
    },
    {
      id: 11,
      title: 'usado 5',
      serviceTime: '16-20min',
      deliveryFee: 4.1,
      category: 'dish',
      cuisine: 'Bmw',
      rating: 3,
      price: 3300,
      coverSrc: '/images/usedCars/used5.jpg',
    },
    {
      id: 12,
      title: 'usado 6',
      serviceTime: '24-30min',
      deliveryFee: 1.5,
      category: 'dish',
      cuisine: 'Bmw',
      rating: 2,
      price: 4100,
      coverSrc: '/images/usedCars/used6.jpg',
    },
  ];
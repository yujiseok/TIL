const carMakers: string[] = ["Hyundai", "Kia", "Audi"]; // string[]
const dates = [new Date(), new Date()];

const carsByMake = [["Sonata"], ["K8"], ["Q4"]]; // string[][]

// Help with inference when extracting values

const car = carMakers[0]; // string
const myCar = carMakers.pop(); // string

// Prevent incompatible values
// carMakers.push(100);s

// Help with map, forEach and reduce ...
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase(); // IDE 인텔리센스
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-01-01"]; // (string | Date)[]
importantDates.push("내일");
importantDates.push(new Date());

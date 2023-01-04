const drinkObj = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const drinkTuple: Drink = ["brown", true, 40];

const carSpecs: [number, number] = [400, 3354]; // tuple을 사용하면 데이터가 무슨 의미인지 파악하기 어려움

const carStats = {
  horsepower: 400,
  weight: 3354,
};

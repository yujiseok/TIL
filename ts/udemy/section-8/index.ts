class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

// vehicle이 하는 메서드를 다 가지고 있어야함
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("VROOM VROOM");
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "black");
car.startDriving();

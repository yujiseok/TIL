import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";
// class로 export할 때는 파일명을 대문자로

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "black";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h1>User Name: ${this.name}</h>`;
  }
}

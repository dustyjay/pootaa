import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-cities",
  templateUrl: "./cities.component.html",
  styleUrls: ["./cities.component.scss"]
})
export class CitiesComponent implements OnInit {
  cities: object[] = [
    {
      name: "Abia",
      text: "14 Porters in Abia with 10 deliveries"
    },
    {
      name: "Abia",
      text:
        "14 Porters in Abia with 10 deliveries14 Porters in Abia with 10 deliveries"
    },
    {
      name: "Abia",
      text:
        "14 Porters in Abia with 10 deliveries14 Porters in Abia with 10 deliveries"
    },
    {
      name: "Abia",
      text:
        "14 Porters in Abia with 10 deliveries14 Porters in Abia with 10 deliveries"
    },
    {
      name: "Abia",
      text: "14 Porters in Abia with 10 deliveries"
    },
    {
      name: "Abia",
      text: "14 Porters in Abia with 10 deliveries"
    },
    {
      name: "Abia",
      text: "14 Porters in Abia with 10 deliveries"
    },
    {
      name: "Abia",
      text: "14 Porters in Abia with 10 deliveries"
    },
    {
      name: "Abia",
      text: "14 Porters in Abia with 10 deliveries"
    },
    {
      name: "Abia",
      text: "14 Porters in Abia with 10 deliveries"
    },
    {
      name: "Abia",
      text: "14 Porters in Abia with 10 deliveries"
    },
    {
      name: "Abia",
      text: "14 Porters in Abia with 10 deliveries"
    }
  ];
  constructor() {}

  ngOnInit() {}
}

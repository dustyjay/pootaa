import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-package-cards",
  templateUrl: "./package-cards.component.html",
  styleUrls: ["./package-cards.component.scss"]
})
export class PackageCardsComponent implements OnInit {
  role: string = "admin";
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-package-listings",
  templateUrl: "./package-listings.component.html",
  styleUrls: ["./package-listings.component.scss"]
})
export class PackageListingsComponent implements OnInit {
  arr = Array(3);

  constructor() {}

  ngOnInit() {}
}

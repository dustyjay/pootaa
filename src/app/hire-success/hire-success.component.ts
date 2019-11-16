import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hire-success",
  templateUrl: "./hire-success.component.html",
  styleUrls: ["./hire-success.component.scss"]
})
export class HireSuccessComponent implements OnInit {
  private tempData: string = "This is data from the child thing";
  constructor() {}

  ngOnInit() {}
}

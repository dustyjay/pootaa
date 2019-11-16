import { Component, OnInit } from "@angular/core";
import { AuthTextService } from "../auth-text.service";

@Component({
  selector: "app-hire-success",
  templateUrl: "./hire-success.component.html",
  styleUrls: ["./hire-success.component.scss"]
})
export class HireSuccessComponent implements OnInit {
  constructor(private colorService: AuthTextService) {
    colorService.setHeaderColor("color");
  }

  ngOnInit() {}
}

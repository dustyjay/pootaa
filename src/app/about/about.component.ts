import { Component, OnInit } from "@angular/core";
import { AuthTextService } from "../auth-text.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  constructor(private colorService: AuthTextService) {
    colorService.setHeaderColor("color");
  }

  ngOnInit() {}
}

import { Component, OnInit, Input } from "@angular/core";
import { AuthTextService } from "../auth-text.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private titleService: AuthTextService) {}

  ngOnInit() {
    this.titleService.setAuthTitle([
      "Moving Your Cargo Just Got Easier.",
      "Come explore all the resources available for you for free"
    ]);
  }
}

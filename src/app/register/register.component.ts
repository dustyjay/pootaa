import { Component, OnInit } from "@angular/core";
import { AuthTextService } from "../auth-text.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  private title: string[];

  constructor(private titleService: AuthTextService) {}

  ngOnInit() {
    this.titleService.setAuthTitle([
      "Moving Your Cargo Just Got Easier.",
      "Come explore all the resources available for you for free"
    ]);
  }
}

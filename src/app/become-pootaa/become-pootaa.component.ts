import { Component, OnInit } from "@angular/core";
import { AuthTextService } from "../auth-text.service";

@Component({
  selector: "app-become-pootaa",
  templateUrl: "./become-pootaa.component.html",
  styleUrls: ["./become-pootaa.component.scss"]
})
export class BecomePootaaComponent implements OnInit {
  constructor(private titleService: AuthTextService) {}

  ngOnInit() {
    this.titleService.setAuthTitle([
      "Become a Pootaa",
      "To become a porter, we will require a few details from you!"
    ]);
  }
}

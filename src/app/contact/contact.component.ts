import { Component, OnInit } from "@angular/core";
import { AuthTextService } from "../auth-text.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  constructor(private colorService: AuthTextService) {
    colorService.setHeaderColor("invert");
  }

  ngOnInit() {}
}

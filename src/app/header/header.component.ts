import { Component, OnInit } from "@angular/core";
import { AuthTextService } from "../auth-text.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  invert: boolean = false;
  sidebar: boolean = false;

  showSidebar() {
    this.sidebar = true;
  }

  hideSidebar() {
    this.sidebar = false;
  }
  constructor(private colorService: AuthTextService) {
    this.colorService.headerColor.subscribe(
      resp => (this.invert = resp === "invert" ? true : false)
    );
  }

  ngOnInit() {}
}

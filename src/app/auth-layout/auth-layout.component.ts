import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-auth-layout",
  templateUrl: "./auth-layout.component.html",
  styleUrls: ["./auth-layout.component.scss"]
})
export class AuthLayoutComponent implements OnInit {
  title: string;
  constructor() {}

  ngOnInit() {}

  handleTitle(title) {
    console.log(title, " is title");
    this.title = title;
  }
}

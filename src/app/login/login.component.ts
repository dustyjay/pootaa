import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  @Output() title: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.title.emit("Login Title");
  }
}

import { Component, OnInit, Input } from "@angular/core";
import { AuthTextService } from "../auth-text.service";

@Component({
  selector: "app-auth-layout",
  templateUrl: "./auth-layout.component.html",
  styleUrls: ["./auth-layout.component.scss"]
})
export class AuthLayoutComponent implements OnInit {
  title: string[];
  constructor(private titleService: AuthTextService) {
    this.titleService.message.subscribe(resp => (this.title = resp));
  }

  ngOnInit() {}
}
